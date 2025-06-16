// src/components/home/Dock.jsx
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./dock.css";

function DockItem({
  children,
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  // Spring yang lebih lembut
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={onClick}
      className='dock-item'
      tabIndex={0}
      role='button'>
      {Children.map(children, (child) => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, isHovered }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const unsub = isHovered.on("change", (v) => setIsVisible(v === 1));
    return () => unsub();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className='dock-label'
          role='tooltip'
          style={{ x: "-50%" }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children }) {
  return <div className='dock-icon'>{children}</div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.5, stiffness: 100, damping: 30 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const maxH = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const hRow = useTransform(isHovered, [0, 1], [panelHeight, maxH]);
  const height = useSpring(hRow, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ height }} className={`dock-outer ${className}`}>
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(0);
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className='dock-panel'
        style={{ height: panelHeight }}
        role='toolbar'
        aria-label='Application dock'>
        {items.map((item, i) => (
          <DockItem
            key={i}
            onClick={item.onClick}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}>
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel isHovered={isHovered}>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

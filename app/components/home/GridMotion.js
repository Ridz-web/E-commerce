"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "./GridMotion.css";

const GridMotion = ({ items = [], gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);

  const mouseXRef = useRef(0);

  const totalItems = 28;
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : [];

  useEffect(() => {
    if (combinedItems.length < 1) return;

    gsap.ticker.lagSmoothing(0);
    mouseXRef.current = window.innerWidth / 2;

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, [combinedItems]);

  return (
    <div className='noscroll loading' ref={gridRef}>
      <section
        className='intro'
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}>
        <div className='gridMotion-container'>
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className='row'
              ref={(el) => (rowRefs.current[rowIndex] = el)}>
              {[...Array(7)].map((_, itemIndex) => {
                const src = combinedItems[rowIndex * 7 + itemIndex];

                return (
                  <div key={itemIndex} className='row__item'>
                    <div className='row__item-inner'>
                      {src && (
                        <Image
                          src={src}
                          alt=''
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className='fullview'></div>
      </section>
    </div>
  );
};

export default GridMotion;

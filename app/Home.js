"use client";

import Image from "next/image";
import Logo from "../public/images/LogoTransparent.png";
import SearchBar from "./components/home/SearchBar";
import Card from "./components/home/Card";
import daurulang1 from "../public/images/daurulang1.jpg";
import daurulang2 from "../public/images/daurulang2.jpg";
import daurulang3 from "../public/images/daurulang3.jpg";
import daurulang4 from "../public/images/daurulang4.jpg";
import daurulang5 from "../public/images/daurulang5.jpg";
import daurulang6 from "../public/images/daurulang6.jpg";
import daurulang7 from "../public/images/daurulang7.jpg";

import { VscHome, VscArchive, VscCallOutgoing } from "react-icons/vsc";
import Dock from "./components/home/Dock";

// Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Menu Dock
const items = [
  {
    icon: <VscHome size={18} className='filter brightness-0 invert' />,
    label: "Home",
    onClick: () => (window.location.href = "#hero"),
  },
  {
    icon: <VscArchive size={18} className='filter brightness-0 invert' />,
    label: "Product",
    onClick: () => (window.location.href = "#product"),
  },
  {
    icon: <VscCallOutgoing size={18} className='filter brightness-0 invert' />,
    label: "Contact",
    onClick: () => (window.location.href = "#contact"),
  },
];

// Handler
export default function Home() {
  const handleView = () => alert("Lihat Detail.");
  const handleAddToCart = () => alert("Tambah Keranjang.");
  const handleBuy = () => alert("Beli Langsung.");

  // Refs for Hero, Product, Contact
  const heroRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  // Detect if in view
  const heroInView = useInView(heroRef, { once: true });
  const productInView = useInView(productRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  return (
    <>
      {/* Section Hero */}
      <motion.div
        ref={heroRef}
        id='hero'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='relative w-full min-h-screen overflow-hidden bg-gray-100 text-gray-900'>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 justify-center items-center h-full p-10 gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='flex flex-col items-start relative ml-0 lg:ml-20'>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ fontFamily: "Akira" }}
              className='text-3xl sm:text-4xl lg:text-5xl text-green-500 font-bold mb-4'>
              Devandanam Community
            </motion.h1>
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: heroInView ? "160px" : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className='w-40 h-1 mb-4 border-none bg-green-500'
            />
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className='text-2xl sm:text-3xl font-bold mb-2 text-gray-900'>
              E-Commerce Website
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className='text-gray-600 max-w-md'>
              Menyediakan bermacam-macam produk limbah bekas yang tentunya masih
              berkualitas
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='flex justify-center items-center w-full h-full p-4'>
            <Image src={Logo} alt='Logo' width={400} height={400} priority />
          </motion.div>
        </div>
      </motion.div>

      {/* Section Product */}
      <motion.div
        ref={productRef}
        id='product'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: productInView ? 1 : 0, y: productInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='relative w-full flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-10'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: productInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ fontFamily: "Akira" }}
          className='text-3xl sm:text-4xl font-bold mb-10 text-green-500'>
          Our Products
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: productInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          <SearchBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: productInView ? 1 : 0,
            y: productInView ? 0 : 50,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full'>
          <Card
            photo={daurulang1}
            title='Produk 1'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
          <Card
            photo={daurulang2}
            title='Produk 2'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
          <Card
            photo={daurulang3}
            title='Produk 3'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
          <Card
            photo={daurulang4}
            title='Produk 4'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
          <Card
            photo={daurulang5}
            title='Produk 5'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
          <Card
            photo={daurulang6}
            title='Produk 6'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
          <Card
            photo={daurulang7}
            title='Produk 7'
            onView={handleView}
            onAddToCart={handleAddToCart}
            onBuy={handleBuy}
          />
        </motion.div>
      </motion.div>

      {/* Section Contact */}
      <motion.div
        ref={contactRef}
        id='contact'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='p-10 bg-gray-100 text-gray-900'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: contactInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ fontFamily: "Akira" }}
          className='text-3xl sm:text-4xl font-bold mb-10 text-green-500'>
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: contactInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}>
          Silakan hubungi kami melalui email: example@example.com
        </motion.p>
      </motion.div>

      {/* Dock Bottom Navbar (without motion) */}
      <div>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className='fixed bottom-0 left-0 w-full z-50'
        />
      </div>
    </>
  );
}

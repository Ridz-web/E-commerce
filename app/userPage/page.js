"use client";

import Image from "next/image";
import SearchBar from "../components/home/SearchBar";
import Card from "../components/home/Card";
import {
  Filter,
  Layers,
  Tag,
  Box,
  Heart,
  User,
  ShoppingCart,
  Receipt,
} from "lucide-react";
import { motion } from "framer-motion";

// Sample products
const products = [
  { photo: "/images/daurulang1.jpg", title: "Produk 1" },
  { photo: "/images/daurulang2.jpg", title: "Produk 2" },
  { photo: "/images/daurulang3.jpg", title: "Produk 3" },
  { photo: "/images/daurulang4.jpg", title: "Produk 4" },
  { photo: "/images/daurulang5.jpg", title: "Produk 5" },
  { photo: "/images/daurulang6.jpg", title: "Produk 6" },
  { photo: "/images/daurulang7.jpg", title: "Produk 7" },
  { photo: "/images/daurulang1.jpg", title: "Produk 8" },
];

// Handlers
const handleAddToCart = () => alert("Tambah Keranjang.");
const handleBuy = () => alert("Beli Langsung.");

export default function ProductPage() {
  return (
    <div className='flex min-h-screen w-full text-gray-900'>
      {/* Side Bar (dark) */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='hidden lg:flex flex-col w-60 p-6 gap-6 dark:bg-gray-900 dark:text-gray-100'>
        <h2 className='text-2xl font-semibold mb-4 flex items-center gap-2'>
          <Filter size={24} />
          Menu
        </h2>

        <div className='flex flex-col gap-4'>
          <label className='flex items-center gap-2 p-2 rounded-md dark:hover:bg-gray-800 transition-all'>
            <ShoppingCart size={20} />
            Keranjang Anda
          </label>

          <label className='flex items-center gap-2 p-2 rounded-md dark:hover:bg-gray-800 transition-all'>
            <User size={20} />
            Akun Anda
          </label>

          <label className='flex items-center gap-2 p-2 rounded-md dark:hover:bg-gray-800 transition-all'>
            <Heart size={20} />
            Favorit
          </label>

          <label className='flex items-center gap-2 p-2 rounded-md dark:hover:bg-gray-800 transition-all'>
            <Receipt size={20} />
            Transaksi
          </label>
        </div>
      </motion.aside>

      {/* Main Section (light) */}
      <div className='flex-1 p-6 bg-gray-100'>
        {/* Navbar Product */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='flex items-center justify-between mb-6 p-4 rounded-full shadow-md'>
          <SearchBar placeholder='Cari produk...' />
          <div className='flex items-center gap-4 ml-4'>
            <Tag size={20} />
            <Box size={20} />
            <Heart size={20} />
            <Layers size={20} />
          </div>
        </motion.nav>

        {/* Product List */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px -5px black" }}
              transition={{ duration: 0.3, ease: "easeOut" }}>
              <Card
                photo={item.photo}
                title={item.title}
                linkTo={`/${item.title.toLowerCase().replace(/\s+/g, "")}`}
                onAddToCart={handleAddToCart}
                onBuy={handleBuy}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

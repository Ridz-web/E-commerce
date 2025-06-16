"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingCart, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./card.css";

export default function Card({ photo, title, linkTo, onAddToCart, onBuy }) {
  return (
    <motion.div
      initial={{ scale: 0.97, boxShadow: "none" }}
      whileHover={{ scale: 1, boxShadow: "0px 12px 24px -6px #0003" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className='bg-gray-200 p-4 card rounded-lg shadow-md overflow-hidden w-60 transform transition-all'>
      <div className='mb-4'>
        {/* Ganti img jadi Image dari next/image */}
        <Image
          src={photo}
          alt={title}
          className='rounded-md w-full h-40 object-cover'
          width={500}
          height={500}
        />
      </div>
      <h3 className='text-lg font-semibold text-gray-900 mb-4 text-center'>
        {title}
      </h3>
      <div className='flex justify-around'>
        {/* Tombol Lihat Detail menggunakan Link */}
        {linkTo ? (
          <Link
            href={`/details/${linkTo}`}
            passHref
            aria-label='Lihat Detail'
            className='p-2 rounded-full text-gray-500 hover:bg-gray-300 transition-all'>
            <Eye size={20} />
          </Link>
        ) : (
          <button
            aria-label='Lihat Detail'
            className='p-2 rounded-full text-gray-500 hover:bg-gray-300 transition-all'>
            <Eye size={20} />
          </button>
        )}

        <button
          onClick={onAddToCart}
          aria-label='Tambah Keranjang'
          className='p-2 rounded-full text-gray-500 hover:bg-gray-300 transition-all'>
          <ShoppingCart size={20} />
        </button>

        <button
          onClick={onBuy}
          aria-label='Beli Langsung'
          className='p-2 rounded-full text-gray-500 hover:bg-gray-300 transition-all'>
          <CreditCard size={20} />
        </button>
      </div>
    </motion.div>
  );
}

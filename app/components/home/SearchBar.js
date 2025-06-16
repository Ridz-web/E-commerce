"use client";

import { Search } from "lucide-react";

export default function SearchBar({ placeholder }) {
  return (
    <div className='flex items-center gap-2 p-2 rounded-full shadow-md bg-gray-200'>
      <Search size={20} />
      <input
        aria-label='search'
        placeholder={placeholder}
        className='flex-1 p-2 bg-gray-200 outline-none'
        type='text'
      />
    </div>
  );
}

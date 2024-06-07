import React from 'react';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/components/dynamic/AdminPage/AdminNotes">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded transition duration-300">
            Notes
          </button>
        </Link>
        <Link href="/components/dynamic/AdminPage/AdminBlogs">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded transition duration-300">
            Blogs
          </button>
        </Link>
        <Link href="/components/dynamic/AdminPage/AdminJobs">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded transition duration-300">
            Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}

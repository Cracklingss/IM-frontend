"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      axios.post(`${API}/api/auth/logout`, {}, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-screen p-4 bg-blue-600 text-white flex justify-between items-center z-50">
      <div className="text-lg font-bold">MyWebsite</div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex gap-6">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-blue-800 px-3 py-1 rounded"
          >
            ☰ Menu
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <div className="flex flex-col">
                <Link
                  href="/profile"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Manage Profile
                </Link>
                <Link
                  href="/change-password"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Change Password
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

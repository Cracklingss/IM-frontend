"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="text-lg font-bold">MyWebsite</div>

        <div className="flex gap-6">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-800"
            >
              Menu ▾
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <a
                  href="/change-password"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Change Password
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Website 🎉</h1>
        <p className="text-gray-700 max-w-2xl">
          This is the introduction of our website. You can explore different
          pages using the navigation bar above.
          Go to <strong>About Us</strong> to learn how we built this, or use
          <strong> Contact Us</strong> to reach out.
        </p>
      </main>
    </div>
  );
}
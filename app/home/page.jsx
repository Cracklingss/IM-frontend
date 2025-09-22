"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";

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
    <div className="min-h-screen flex flex-col bg-gray-100 flex-grow flex flex-col items-center justify-center p-10 text-center">
      <Navbar />

      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website 🎉</h1>
      <p className="text-gray-700 max-w-2xl">
        This is the introduction of our website. You can explore different
        pages using the navigation bar above.
        Go to <strong>About Us</strong> to learn how we built this, or use
        <strong> Contact Us</strong> to reach out.
      </p>
    </div>
  );
}
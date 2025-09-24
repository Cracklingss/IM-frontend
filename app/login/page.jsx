"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { signIn } from "next-auth/react"; // ✅ import signIn

const API = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${API}/api/auth/login`, formData, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        })
        .then((res) => {
          if (res.data.status) {
            router.push("/home");
          } else {
            let message = res.data.message;
            alert(message);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border p-2 rounded"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-sm text-center">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* ✅ Google sign-in button */}
        <div className="mt-6">
          <button
            onClick={() => {
              signIn("google", { callbackUrl: "/home" })
              handleGLogin();
            }}
            className="w-full bg-red-500 text-white rounded p-2 hover:bg-red-600"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

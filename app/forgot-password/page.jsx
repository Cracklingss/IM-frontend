"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    petsName: "",
    newPass: "",
    confirmNewPass: ""
  })
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPass != formData.confirmNewPass) alert("Cannot proceed must be new password is equals to confirm new password");
    try {
      await axios.post(`${API}/api/auth/forgot-password`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }).then((res) => {
        if (res.data.status) {
          router.push("/home");
        } else {
          let message = res.data.message;
          alert(message);
        }
      })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-black pt-20">
      <div className="max-w-md w-full mx-auto mb-20 bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Enter your pet's name"
            name="petsName"
            onChange={handleChange}
            value={formData.petsName}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter your new password"
            name="newPass"
            onChange={handleChange}
            value={formData.newPass}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Confirm your new password"
            name="confirmNewPass"
            onChange={handleChange}
            value={formData.confirmNewPass}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

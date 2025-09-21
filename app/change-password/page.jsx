"use client";
import { useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  })
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleChangePass = async (e) => {
    e.preventDefault();
    if(formData.newPassword != formData.confirmNewPassword) alert("Cannot proceed must be new password is equals to confirm new password");
    try {
      console.log(formData);
      axios.post(`${API}/api/auth/change-password`, {formData}, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow mt-6">
        <h1 className="text-2xl font-bold mb-4">Change Password</h1>

        <form onSubmit={handleChangePass} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <label className="block mb-1 text-gray-700">Current Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              name="currentPassword"
              onChange={handleChange}
              value={formData.currentPassword}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">New Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              name="newPassword"
              onChange={handleChange}
              value={formData.newPassword}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Confirm New Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Change Password
          </button>
        </form>
      </div>
    </>
  );
}

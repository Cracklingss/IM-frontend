"use client";
import Navbar from "../components/navbar";
import { useState } from "react";

export default function ProfilePage() {
  // Fake initial user data (for demo)
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("test@gmail.com");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully ✅");
    // later: send axios.put("/user/update", { name, email })
  };

  return (

    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Manage Profile</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded bg-gray-100"
            value={email}
            disabled // email not editable
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
    </>
  );
}

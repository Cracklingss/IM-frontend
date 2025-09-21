"use client";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-20">
        <h1 className="text-2xl font-bold">Home</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the home page. You’re logged in successfully!
        </p>
      </div>
    </>
  );
}

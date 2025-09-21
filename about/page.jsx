"use client";
import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-20">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-2 text-gray-600">
          This project demonstrates a simple authentication system in Next.js.
        </p>
      </div>
    </>
  );
}

"use client";
import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow mt-20">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600">
          For questions about this project, reach out to the instructor or check the documentation.
        </p>
      </div>
    </>
  );
}

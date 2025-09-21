"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [resetCode, setResetCode] = useState(""); // store the 6-digit code
  const [enteredCode, setEnteredCode] = useState("");
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  // Step 1: Send reset code
  const handleForgot = (e) => {
    e.preventDefault();
    if (!email) {
      alert("❌ Please enter your email");
      return;
    }

    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setResetCode(code);
    console.log("Reset code (for demo purposes):", code); // for testing in console

    localStorage.removeItem("token"); // log out user
    setSubmitted(true);
  };

  // Step 2: Verify code
  const handleVerify = (e) => {
    e.preventDefault();
    if (enteredCode === resetCode) {
      setVerified(true);
      alert("✅ Code verified! You can now reset your password.");
      router.push("/reset-password"); // redirect to reset password page
    } else {
      alert("❌ Incorrect code. Please try again.");
    }
  };

  // Step 1: Email submitted, show reset code input
  if (submitted && !verified) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Check your email 📧</h1>
        <p className="mb-4">
          A 6-digit reset code has been sent to <span className="font-semibold">{email}</span>.
        </p>
        <form onSubmit={handleVerify} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter 6-digit code"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            maxLength={6}
            className="border border-gray-300 p-2 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Verify Code
          </button>
        </form>
      </div>
    );
  }

  // Step 0: Initial forgot password form
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
      <form onSubmit={handleForgot} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Reset Code
        </button>
      </form>
    </div>
  );
}

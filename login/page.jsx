"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials
  const VALID_EMAIL = "test@gmail.com";
  const VALID_PASSWORD = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // ✅ Save token (fake for now)
      localStorage.setItem("token", "fake-jwt-token");

      // ✅ Redirect to home
      router.push("/home");
    } else {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow mt-6">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center">
        <a href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </p>
    </div>
  );
}

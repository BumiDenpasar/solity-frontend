"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/auth";

export default function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [c_password, setC_password] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await registerUser(name, email, password, c_password);

      document.cookie = `auth-token=${response.data.token}; path=/`;
      router.push("/home");
      router.refresh(); 
    } catch (err) {
      setIsLoading(false);
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Welcome To Solity</h1>
        <p className="text-gray-600">
          You can make an account or{" "}
          <a href="/login" className="text-brand hover:text-orange-500">
            login here
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Bumi Denpasar"
            className="input"
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@gmail.com"
            className="input"
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>

         <div className="input-container">
          <label htmlFor="c_password">Confirm Password</label>
          <input
            name="c_password"
            id="c_password"
            type="password"
            value={c_password}
            onChange={(e) => setC_password(e.target.value)}
            required
            className="input"
          />
        </div>

        {error && (
          <div className="text-sm text-center text-red-500">{error}</div>
        )}

        <button type="submit" className="button" disabled={isLoading}>
          {isLoading ? "Loading..." : "register"}
        </button>
      </form>
    </>
  );
}

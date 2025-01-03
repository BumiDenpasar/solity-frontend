"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      const response = await loginUser(email, password);
      toast.success('Login Success!');
      //document.cookie = `auth-token=${response.data.token}; path=/`;
      router.push("/home");
      router.refresh(); 
    } catch (err) {
      toast.error('An error occurred');
      setIsLoading(false); 
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Welcome To Solity</h1>
        <p className="text-gray-600">
          You can login to an account or{" "}
          <a href="register" className="text-brand hover:text-orange-500">
            register here
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Email Input */}
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

        {/* Password Input */}
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

        {error && (
          <div className="text-sm text-center text-red-500">{error}</div>
        )}

        {/* Login Button */}
        <button type="submit" className= {isLoading ? "disabled-button" : "button"} disabled={isLoading}>
          {isLoading ? "Loading..." : "login"}
        </button>
      </form>
    </>
  );
}

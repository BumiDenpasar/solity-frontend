"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/app/utils/validation";



const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        loginSchema.parse({ email, password });
        // Call your Laravel API for authentication
        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
        if (res.ok) {
          router.push("/notes");
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle validation error
      }
    };
  

    return (
        <>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome To Solity
              </h1>
              <p className="text-gray-600">
                Make an account or{" "}
                <a href="login" className="text-brand hover:text-orange-500">
                  login here
                </a>
              </p>
            </div>
    
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Email Input */}
                  <div className="input-container">
                    <label htmlFor="email">
                      Email
                    </label>
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
                    <label htmlFor="password" >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="input"
                    />
                  </div>
    
                  {/* Login Button */}
                  <button
                    type="submit"
                    className="button"
                  >
                    register
                  </button>
                </form>
          </>
    
      );
};

export default page;
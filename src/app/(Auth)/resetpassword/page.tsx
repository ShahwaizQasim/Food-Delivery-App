"use client";

import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {}

const ResetPassword: NextPage<Props> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const urlToken = searchParams.get("token");
    setToken(urlToken || "");
    console.log("Token", urlToken);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSuccess("");
      setLoading(true);
      const res = axios.post("/api/resetpassword", {
        token: token,
        password1: newPassword,
        password2: confirmPassword,
      });
      setSuccess("your password reset has beeen completed");
      console.log("res=>", res);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Reset Password
          </h1>

          {success ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              <p className="font-bold">Success!</p>
              <p>Your password has been reset successfully.</p>
              <p className="text-sm">Redirecting to login page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New Password
                </label>
                <input
                  id="newPassword"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type={`${showPassword2 ? "text" : "password"}`}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword2 ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400  text-red-700 px-4 py-3 rounded relative">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className={`w-full bg-green-600 text-white dark:text-gray-100 py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Reset Password"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

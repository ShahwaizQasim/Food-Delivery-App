"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {}

const ForgotPassword: NextPage<Props> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      console.log("data", data);
      setLoading(true);
      setError("");
      setSuccess("");
      const res = await axios.post("/api/forgotpassword", data);
      setSuccess("A verification code has been sent to your email.");
      console.log(res);
      reset();
    } catch (error:any) {
      console.log(error);
      if (error?.response) {
        if (error?.response.status === 400) {
          setError(error.response.data.msg ||
            "User not found. Please check your email.")
        }else if(error?.response?.status === 500){
          setError(
            error.response.data.msg || "Server error. Please try again later."
          );
        }else{
          setError("An error occurred. Please try again.");
        }
      }else if(error.request){
        setError("No response from server. Please check your connection.");
      }else{
        setError("Failed to send request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center gap-4 w-[400px] bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Enter your email address and we'll send you a verification code to
            reset your password.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <Input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              disabled={loading}
              className="w-full px-2 py-3 border border-gray-300 h-[40px] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 text-gray-900 bg-white "
              {...register("email", { required: true })}
            />

            {error && (
              <p className="mt-2 text-red-500 dark:text-red-400 text-sm">
                {error}
              </p>
            )}
            {success && (
              <p className="mt-2 text-green-500 dark:text-green-400 text-sm">
                {success}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full px-6 py-2 bg-green-500 text-white dark:text-gray-100 rounded-lg hover:bg-green-600   flex items-center justify-center gap-2 transition-colors duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Verification Code"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  MoveRight,
  Briefcase,
  Search,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn, useSession } from "next-auth/react";
import { Success } from "@/components/sweetAlert2/alert";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      const res = await signIn("credentials", {
        email: data?.email,
        password: data?.password,
        redirect: false,
      });
      console.log("login res", res);
      if (res?.error) {
        if (res?.error === "User Not Found") {
          Success(
            "No account found with this email. Please check your email or sign up.",
            "error"
          );
        } else if (res?.error === "Email Not Verified") {
          Success(
            "Your email has not been verified. Please check your inbox for the verification link.",
            "error"
          );
        } else if (res?.error === "Incorrect Password") {
          Success("Incorrect email or password. Please try again.", "error");
        } else {
          Success("Login failed. Please try again later.", "error");
        }
      } else {
        reset();
        Success("Login Successfully", "success");
        router.push("/");
      }
    } catch (error) {
      Success((error as Error).message, "error");
      console.log("login Error", error);
    }
  };
  useEffect(() => {
    if (status === "authenticated" && session) {
      router.push("/");
    }
  }, [status, session, router]);

  if (status === "loading" || (status === "authenticated" && session)) {
    return <Loader />;
  }

  const handleSocialLogin = async (provider: string) => {
    try {
      console.log(`Social login with ${provider}`);
      const result = await signIn(provider, {
        redirect: false,
        callbackUrl: "/",
      });
      console.log("result", result);
    } catch (error) {
      console.log("login Error", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-green-800 flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white rounded-full opacity-10 blur-xl"></div>
        </div>

        <div className="relative z-10 max-w-md text-center">
          <div className="flex justify-center mb-8">
            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg mb-2">
              <img
                src="/unnamed.png"
                alt="Saylani Welfare Logo"
                className="h-22 w-22 rounded-full"
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            Saylani Job Portal
          </h1>
          <p className="text-xl mb-10 text-green-100">
            Empowering careers, connecting opportunities
          </p>

          <div className="grid grid-cols-1 gap-6 mb-10">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 transform transition-all hover:scale-105 hover:bg-white/15">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-green-500/30 rounded-lg mr-3">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">
                    Find Opportunities
                  </h3>
                  <p className="text-green-100">
                    Discover thousands of job openings across Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 transform transition-all hover:scale-105 hover:bg-white/15">
              <div className="flex items-start mb-3">
                <div className="p-2 bg-green-500/30 rounded-lg mr-3">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg mb-1">Career Growth</h3>
                  <p className="text-green-100">
                    Get guidance from industry professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 relative bottom-18">
        <Card className="w-full max-w-md p-8 shadow-xl border-0 bg-white">
          <div className="lg:hidden flex justify-center mb-8">
            <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
              <img
                src="/unnamed.png"
                alt="Saylani Welfare Logo"
                className="h-12 w-12 rounded-full"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Sign in to your account to continue
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="user-email"
                  className="text-gray-700 font-medium"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="youremail@example.com"
                    className="pl-10 bg-gray-50 border-gray-200 py-5 focus:border-green-500 focus:ring-green-500 rounded-lg"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p role="alert" className="text-red-600 pt-1">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="user-password"
                    className="text-gray-700 font-medium"
                  >
                    Password
                  </Label>
                  <Link
                    href="/forgotpassword"
                    className="text-sm text-green-600 hover:text-green-800 hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 py-5 bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p role="alert" className="text-red-600 pt-1">
                      {errors.password.message}
                    </p>
                  )}
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-lg flex items-center justify-center transition-all font-medium text-base"
              >
                Sign In
                <MoveRight size={18} className="ml-2" />
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center justify-center border-gray-200 hover:bg-gray-50 py-5 rounded-lg"
                  onClick={() => handleSocialLogin("google")}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Login With Google
                </Button>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-green-600 hover:text-green-800 hover:underline font-semibold"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

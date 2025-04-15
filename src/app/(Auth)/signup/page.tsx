"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  UserPlus,
  Briefcase,
  Building,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Success } from "@/components/sweetAlert2/alert";
import { useRouter } from "next/navigation";
// import { toast } from 'sonner';

const SignUpSchema = z.object({
  fullName: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/signup", data);
      Success("SignUp Successfully", "success");
      console.log("res", res);
      router.push("/login");
      console.log(data);
      reset();
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Left side banner */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-emerald-700 flex-col justify-between items-center text-white pt-[105px]">
        <div className="w-full max-w-md">
          <div className="mb-8 pt-10">
            <h1 className="text-4xl font-bold mb-6">Saylani Job Portal</h1>
            <p className="text-lg opacity-90 mb-10">
              Your gateway to career opportunities that match your skills and
              aspirations
            </p>
            <div className="space-y-6 mt-12">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Thousands of Jobs</h3>
                  <p className="text-sm opacity-90">
                    Access a wide range of job opportunities across multiple
                    industries
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Top Employers</h3>
                  <p className="text-sm opacity-90">
                    Connect with leading companies looking for talented
                    professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Personalized Matches</h3>
                  <p className="text-sm opacity-90">
                    Get job recommendations that align with your skills and
                    preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-10 relative bottom-8">
        {/* <Card className="w-full p-8 relative bottom-11"> */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <UserPlus className="h-8 w-8 pl-1 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Join Saylani Job Portal
          </h1>
          <p className="text-gray-600 mt-2">
            Create an account to start your career journey
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-[60%]">
          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Enter your FullName"
                className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <p role="alert" className="text-red-600 pt-1">
                  {errors?.fullName?.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="you@example.com"
                className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
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
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              {errors.email && (
                <p role="alert" className="text-red-600 pt-1">
                  {errors?.email?.message}
                </p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white h-12 font-medium mt-6 rounded-lg shadow-md"
          >
            {loading ? "loading...." : "Create Account"}
          </Button>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-green-600 hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
        {/* </Card> */}
      </div>
    </div>
  );
}

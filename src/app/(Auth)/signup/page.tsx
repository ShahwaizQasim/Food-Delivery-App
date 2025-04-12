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
// import { toast } from 'sonner';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      // toast.error('Passwords do not match!');
      return;
    }

    if (!formData.agreeTerms) {
      // toast.error('Please agree to the terms and conditions');
      return;
    }

    console.log("Signup data:", formData);
    // toast.success('Account created successfully! Please check your email for verification.');
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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+923001234567"
                  className="pl-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
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
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 rounded-lg border-gray-200 focus:border-green-500 focus:ring-green-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters
              </p>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white h-12 font-medium mt-6 rounded-lg shadow-md"
            >
              Create Account
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

"use client";
import axios from "axios";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// Define proper types for user
interface User {
  name?: string;
  email?: string;
  profileBio?: string;
  profilePic?: string;
}

interface SessionData {
  user?: User;
}

type FormDataType = {
  name: string;
  email: string;
  profileBio: string;
  twitter: string;
  linkedin: string;
};

const ProfilePage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    profileBio: "",
    twitter: "",
    linkedin: "",
  });

  const { data: session, update } = useSession();
  const router = useRouter();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
        profileBio: session.user.profileBio || "",
        twitter: "",
        linkedin: "",
      });

      if (session?.user?.image) {
        setImagePreview(session.user?.image);
      }
    }
  }, [session]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      console.log("file", file);
      
      if (file) {
        setImageFile(file);
        const reader = new FileReader();
        console.log("reader", reader);
        
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      if (imageFile) {
        formDataToSend.append("profilePic", imageFile);
      }
      console.log("formData", formData);

      const response = await axios.post("/api/updateprofile", formDataToSend);

      await update({
        ...session,
        user: {
          ...session?.user,
          ...formData,
          profilePic:
            response.data.user.profilePic || session?.user?.profilePic,
        },
      } as SessionData);
      router.refresh();
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error Updating Profile", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-screen bg-white">
        <div className="p-10 flex flex-col items-center">
          {/* Profile Picture */}
          <div className="h-40 w-40 text-6xl bg-emerald-400 rounded-full flex items-center justify-center text-white font-semibold overflow-hidden">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              session?.user?.name?.charAt(0) || "U"
            )}
          </div>

          {/* Profile Info */}
          <div className="text-center mt-8 w-full">
            <h2 className="text-4xl font-bold text-black">
              {session?.user?.name}
            </h2>
            <p className="text-xl text-gray-600 mt-2">{session?.user?.email}</p>
            <p className="mt-6 text-xl text-gray-800 max-w-2xl mx-auto">
              {formData.profileBio}
            </p>
          </div>

          {/* Edit Profile Button */}
          <div className="flex gap-4 justify-center mt-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-tr from-emerald-200 to-emerald-400 text-emerald-800 px-8 py-3 mt-4 text-lg rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto p-6 animate-fade-in-down">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-emerald-800">
                Edit Profile
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none"
                disabled={isLoading}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit}>
              {/* Profile Picture in Modal */}
              <div className="mb-4 flex flex-col items-center">
                <div className="h-24 w-24 text-4xl bg-emerald-400 rounded-full flex items-center justify-center text-white font-semibold mb-2 overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    session?.user?.name?.charAt(0) || "U"
                  )}
                </div>

                <label className="cursor-pointer px-3 py-1.5 text-sm bg-emerald-100 text-emerald-700 rounded-md hover:bg-emerald-200 transition-colors">
                  <span>Change Photo</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={isLoading}
                  />
                </label>
              </div>

              {/* Full Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400  bg-white text-gray-900"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700  mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white text-gray-900 "
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Bio Textarea */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="profileBio"
                  value={formData.profileBio}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white text-gray-900"
                  disabled={isLoading}
                />
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-gray-400"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-tr from-emerald-300 to-emerald-500 text-white rounded-md hover:from-emerald-400 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 flex items-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

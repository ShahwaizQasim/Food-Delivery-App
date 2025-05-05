"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Success } from "../sweetAlert2/alert";

// Job Form Schema
const jobFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Job title must be at least 3 characters" }),
  company: z.string().min(2, { message: "Company name is required" }),
  location: z.string().min(2, { message: "Location is required" }),
  jobType: z.enum([
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Remote",
  ]),
  salary: z.string().optional(),
  experienceLevel: z.enum([
    "Entry Level",
    "0-6 month",
    "0-1 year",
    "1-3 years",
    "3-5 years",
    "5+ years",
    "Senior Level",
  ]),
  category: z.string().min(1, { message: "Job category is required" }),
  skillsRequired: z.string().min(1, { message: "Skills are required" }),
  description: z
    .string()
    .min(10, { message: "Job description must be at least 10 characters" }),
  responsibilities: z
    .string()
    .min(10, { message: "Responsibilities must be at least 10 characters" }),
  qualification: z
    .string()
    .min(10, { message: "Qualifications must be at least 10 characters" }),
  deadline: z.string(),
  contactEmail: z
    .string()
    .email({ message: "Please enter a valid email address" }),
});

type JobFormData = z.infer<typeof jobFormSchema>;

const JobPostingForm = ({setIsModalOpen}:{setIsModalOpen: boolean}) => {
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", message: "" })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(jobFormSchema),
  });

  const onSubmit = async (data: JobFormData) => {
    setLoading(true);
    setSubmitMessage({ type: "", message: "" });
    console.log("data", data);
    
    try {
      console.log("data", data);
      const response = await axios.post("/api/jobPost", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response?.data) {
        Success("Job Post Successfully", "success");
        reset();
        window.location.reload();
        setIsModalOpen(false)
      } else {
        Success("Incomplete Input Data", "error");
      }
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
      Success((error as Error).message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg p-6 max-w-4xl mt-8 mx-auto">
      {submitMessage.message && (
        <div
          className={`p-4 mb-6 rounded-md ${
            submitMessage.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitMessage.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Job Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Title *
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Jobs Title "
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              {...register("company")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.company ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Saylani Welfare"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location *
            </label>
            <input
              type="text"
              id="location"
              {...register("location")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Karachi, Pakistan"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">
                {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Type
            </label>
            <select
              id="jobType"
              {...register("jobType")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salary Range (Optional)
            </label>
            <input
              type="text"
              id="salary"
              {...register("salary")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g. PKR 50,000 - 70,000 per month"
            />
          </div>

          <div>
            <label
              htmlFor="experienceLevel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Experience Level *
            </label>
            <select
              id="experienceLevel"
              {...register("experienceLevel")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Entry Level" disabled>
                Entry Level
              </option>
              <option value="0-6 month">0-6 month</option>
              <option value="0-1 year">0-1 year</option>
              <option value="1-3 years">1-3 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5+ years">5+ years</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Category *
            </label>
            <input
              type="text"
              id="category"
              {...register("category")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Information Technology"
            />
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Application Deadline *
            </label>
            <input
              type="date"
              id="deadline"
              {...register("deadline")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.deadline ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.deadline && (
              <p className="mt-1 text-sm text-red-600">
                {errors.deadline.message}
              </p>
            )}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
          <div>
            <label
              htmlFor="contactEmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Email *
            </label>
            <input
              type="email"
              id="contactEmail"
              {...register("contactEmail")}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.contactEmail ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. careers@example.com"
            />
            {errors.contactEmail && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contactEmail.message}
              </p>
            )}
          </div>
        {/* </div> */}

        {/* Skills Required */}
        <div>
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Required Skills *
          </label>
          <input
            type="text"
            id="skills"
            {...register("skillsRequired")}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.skillsRequired ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. React, Node.js, TypeScript, MongoDB"
          />
          {errors.skillsRequired && (
            <p className="mt-1 text-sm text-red-600">
              {errors.skillsRequired.message}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Separate skills with commas
          </p>
        </div>
     

        {/* Detailed Information */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
            >
            Job Description *
          </label>
          <textarea
            id="description"
            {...register("description")}
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Provide a detailed description of the job..."
          ></textarea>
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="responsibilities"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Responsibilities *
          </label>
          <textarea
            id="responsibilities"
            {...register("responsibilities")}
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.responsibilities ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="List the key responsibilities for this position..."
            ></textarea>
          {errors.responsibilities && (
            <p className="mt-1 text-sm text-red-600">
              {errors.responsibilities.message}
            </p>
          )}
        </div>

          </div>
        <div>
          <label
            htmlFor="qualification"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Qualification *
          </label>
          <textarea
            id="qualification"
            {...register("qualification")}
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.qualification ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="List required qualifications and education..."
            ></textarea>
          {errors.qualification && (
            <p className="mt-1 text-sm text-red-600">
              {errors.qualification.message}
            </p>
          )}
        </div>

        {/* Featured Job Option */}
        {/* <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            {...register("featured")}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="featured"
            className="ml-2 block text-sm text-gray-700"
          >
            Mark as featured job (will appear at the top of listings)
          </label>
        </div> */}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75"
          >
            {loading ? (
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
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Posting...
              </>
            ) : (
              "Post Job"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;

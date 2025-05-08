"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ChevronLeft,
  MapPin,
  Briefcase,
  Calendar,
  Send,
  User,
  Mail,
  Phone,
  FileText,
  LocateIcon,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Success } from "@/components/sweetAlert2/alert";
import ProtectedRoute from "@/app/ProtectedRoute";

// Form validation schema
const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  city: z.string().min(10, { message: "Correct city and state name" }),
});

const resumeSchema = z.object({
  resumeUrl: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Please upload your resume",
  }),
});

// Combine schemas for final submission
const formSchema = personalInfoSchema.merge(resumeSchema);

type FormValues = z.infer<typeof formSchema>;

export default function JobApplicationPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  // Extracting jobId from URL path
  const jobId = params?.id || params?.[0];
  const [job, setJob] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [JobsData, setJobsData] = useState([]);

  // Step management
  const [currentStep, setCurrentStep] = useState(1); // 1 = personal info, 2 = resume upload, 3 = resume preview
  const [resumePreview, setResumePreview] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
    }
  }, []);

  const fetchJobsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/jobPost");
      setJobsData(response.data.jobsData);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  // Initialize the form with React Hook Form + Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      resumeUrl: undefined,
    },
    mode: "onChange", // This enables validation as fields change
  });

  // Find the job data based on the ID
  useEffect(() => {
    if (jobId) {
      const foundJob = JobsData.find((job) => job._id === jobId);
      if (foundJob) {
        setJob(foundJob);
      }
    }
  }, [jobId, router, JobsData]);

  // Handle going to the next step (personal info → resume upload)
  const handleNext = async () => {
    // Validate only personal info fields
    const personalInfoResult = await form.trigger([
      "fullName",
      "email",
      "phone",
      "city",
    ]);
    if (personalInfoResult) {
      setCurrentStep(2);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      form.setValue("resumeUrl", file, {
        shouldValidate: true,
        shouldTouch: true,
      });

      // Create a preview of the resume
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setResumePreview(event.target.result as string);
          setCurrentStep(3); // Move to resume preview step
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("jobId", jobId as string);
      formData.append("jobSeekerId", session?.user?.id);
      formData.append("fullName", data.fullName);
      formData.append("jobPosition", job.title);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("city", data.city);
      formData.append("resumeUrl", data.resumeUrl);
      const response = await axios.post("/api/jobApplication", formData);
      console.log("response", response);
      if (response) {
        setIsSubmitted(true);
        Success("Application Submitted", "success");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-medium text-gray-700">
            Loading job details...
          </div>
          {!jobId && (
            <div className="mt-4 text-red-600">
              No job ID found. Please select a job from the jobs page.
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render the Personal Info Form (Step 1)
  const renderPersonalInfoForm = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        className="pl-10"
                        placeholder="Enter your full name"
                        {...field}
                        onBlur={() => form.trigger("fullName")}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        className="pl-10"
                        type="email"
                        placeholder="Enter your email address"
                        {...field}
                        onBlur={() => form.trigger("email")}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        className="pl-10"
                        placeholder="Enter your phone number"
                        {...field}
                        onBlur={() => form.trigger("phone")}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City, State</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <LocateIcon className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                      <Input
                        className="pl-10"
                        placeholder="Enter your city, state"
                        {...field}
                        onBlur={() => form.trigger("city")}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />

            <Button
              type="button"
              className="w-full text-white bg-blue-600 hover:bg-blue-700"
              onClick={handleNext}
            >
              <span>Next</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </>
    );
  };

  // Render the Resume Upload Form (Step 2)
  const renderResumeUploadForm = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-6">Upload Your Resume</h2>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="resumeUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume/CV</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="file"
                        className="pl-10"
                        onChange={handleImageChange}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setCurrentStep(1)}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Personal Information
            </Button>
          </form>
        </Form>
      </>
    );
  };

  // Render the Resume Preview (Step 3)
  const renderResumePreview = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold mb-6">Review and Submit</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{form.getValues("fullName")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{form.getValues("email")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{form.getValues("phone")}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{form.getValues("city")}</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">Resume Preview</h3>
          <div className="bg-gray-50 p-4 rounded-md mb-4 overflow-hidden">
            {resumePreview && (
              <div className="border border-gray-300 rounded-md p-2 bg-white">
                <p className="text-sm mb-2">
                  <strong>File:</strong> {form.getValues("resumeUrl")?.name}
                </p>
                <div className="h-40 overflow-auto border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="text-center text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-2" />
                    <p>Resume uploaded successfully</p>
                    <p className="text-xs">
                      (Preview not available for{" "}
                      {form.getValues("resumeUrl")?.type})
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full text-white bg-blue-600 hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => setCurrentStep(2)}
            disabled={isSubmitting}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Resume Upload
          </Button>
        </div>
      </>
    );
  };

  return (
    <ProtectedRoute>
      <div className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-10 px-8">
          <div className="container mx-auto">
            <Button
              variant="ghost"
              className="text-white mb-4 p-0 hover:bg-blue-600"
              onClick={() => router.push("/jobs")}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
            <h1 className="text-3xl font-bold">Apply for Position</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Application Form */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <Card className="p-6 shadow-md">
                {/* Progress Steps */}
                <div className="flex mb-8 justify-center">
                  <div className="flex items-center">
                    <div
                      className={`rounded-full h-8 w-8 flex items-center justify-center ${
                        currentStep >= 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      1
                    </div>
                    <div
                      className={`h-1 w-12 ${
                        currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    ></div>
                    <div
                      className={`rounded-full h-8 w-8 flex items-center justify-center ${
                        currentStep >= 2
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      2
                    </div>
                    <div
                      className={`h-1 w-12 ${
                        currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    ></div>
                    <div
                      className={`rounded-full h-8 w-8 flex items-center justify-center ${
                        currentStep >= 3
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      3
                    </div>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        Application Submitted!
                      </h3>
                      <p>
                        Thank you for your interest in this position. We will
                        review your application and contact you shortly.
                      </p>
                    </div>
                    <Button
                      onClick={() => router.push("/jobs")}
                      className="bg-blue-600 text-white text-sm hover:bg-blue-700"
                    >
                      Back to Job Listings
                    </Button>
                  </div>
                ) : (
                  <>
                    {currentStep === 1 && renderPersonalInfoForm()}
                    {currentStep === 2 && renderResumeUploadForm()}
                    {currentStep === 3 && renderResumePreview()}
                  </>
                )}
              </Card>
            </div>

            {/* Job Details */}
            <div
              className="lg:w-1/2 order-1 lg:order-2 overflow-y-auto"
              style={{
                height: "520px",
              }}
            >
              <Card className="p-6 shadow-md">
                <div className="mb-6">
                  <Badge className="bg-blue-100 text-blue-700 mb-2">
                    {job.category}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-2">{job.title}</h2>

                  <div className="flex flex-wrap gap-y-2 text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Briefcase className="h-4 w-4 mr-1" />
                      <span>{job.jobType}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Deadline {job.deadline.slice(0, 10)}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold mb-1">
                      Job Description
                    </h3>
                    <p className="text-gray-700 mb-4">{job.description}</p>

                    <h3 className="text-lg font-semibold mb-1">
                      Responsibilities
                    </h3>
                    <p className="text-gray-700 mb-4">{job.responsibilities}</p>

                    <h3 className="text-lg font-semibold mb-1">
                      Skills Required
                    </h3>

                    <p className="text-gray-700 mb-4">{job.skillsRequired}</p>

                    {job.salary && (
                      <>
                        <h3 className="text-lg font-semibold mb-1">
                          Salary Range
                        </h3>
                        <p className="text-gray-700 mb-4">{job.salary}</p>
                      </>
                    )}
                    <h3 className="text-lg font-semibold mb-1">Experience</h3>

                    <p className="text-gray-700 mb-4">{job.experienceLevel}</p>

                    <h3 className="text-lg font-semibold mb-1">
                      Contact Email
                    </h3>
                    <p className="text-gray-700">
                      {job.contactEmail || "Open until filled"}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

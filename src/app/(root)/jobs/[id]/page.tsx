// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import {
//   ChevronLeft,
//   MapPin,
//   Briefcase,
//   Calendar,
//   Send,
//   User,
//   Mail,
//   Phone,
//   FileText,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { jobsData } from "@/components/mocksData/data";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// // Form validation schema
// const formSchema = z.object({
//   fullName: z
//     .string()
//     .min(2, { message: "Full name must be at least 2 characters" }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   phone: z
//     .string()
//     .min(10, { message: "Phone number must be at least 10 digits" }),
//   resumeUrl: z.string().min(1, { message: "Please upload your resume" }),
//   coverLetter: z.string().optional(),
//   experience: z.string().min(1, { message: "Please describe your experience" }),
// });

// type FormValues = z.infer<typeof formSchema>;

// export default function JobApplicationPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const jobId = searchParams.get("id");

//   console.log("jobId", jobId);
  

//   const [job, setJob] = useState<any>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Initialize the form with React Hook Form + Zod
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       resumeUrl: "",
//       coverLetter: "",
//       experience: "",
//     },
//   });

//   // Find the job data based on the ID
//   useEffect(() => {
//     if (jobId) {
//       const foundJob = jobsData.find((job) => job.id === Number(jobId));
//       if (foundJob) {
//         setJob(foundJob);
//       } else {
//         // Job not found, redirect to jobs page
//         router.push("/jobs");
//       }
//     } else {
//       // No job ID provided, redirect to jobs page
//       router.push("/jobs");
//     }
//   }, [jobId, router]);

//   // Handle form submission
//   const onSubmit = async (data: FormValues) => {
//     setIsSubmitting(true);

//     try {
//       // Simulate API call with a delay
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       console.log("Form submitted:", data);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error("Error submitting application:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!job) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
//         <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Page Header */}
//       <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-10 px-8">
//         <div className="container mx-auto">
//           <Button
//             variant="ghost"
//             className="text-white mb-4 p-0 hover:bg-blue-600"
//             onClick={() => router.push("/jobs")}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Back to Jobs
//           </Button>
//           <h1 className="text-3xl font-bold">Apply for Position</h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Application Form */}
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <Card className="p-6 shadow-md">
//               <h2 className="text-2xl font-semibold mb-6">
//                 Submit Your Application
//               </h2>

//               {isSubmitted ? (
//                 <div className="text-center py-10">
//                   <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
//                     <h3 className="text-xl font-semibold mb-2">
//                       Application Submitted!
//                     </h3>
//                     <p>
//                       Thank you for your interest in this position. We will
//                       review your application and contact you shortly.
//                     </p>
//                   </div>
//                   <Button
//                     onClick={() => router.push("/jobs")}
//                     className="bg-blue-600 hover:bg-blue-700"
//                   >
//                     Back to Job Listings
//                   </Button>
//                 </div>
//               ) : (
//                 <Form {...form}>
//                   <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="space-y-6"
//                   >
//                     <FormField
//                       control={form.control}
//                       name="fullName"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Full Name</FormLabel>
//                           <FormControl>
//                             <div className="relative">
//                               <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                               <Input
//                                 className="pl-10"
//                                 placeholder="Enter your full name"
//                                 {...field}
//                               />
//                             </div>
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="email"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Email</FormLabel>
//                           <FormControl>
//                             <div className="relative">
//                               <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                               <Input
//                                 className="pl-10"
//                                 type="email"
//                                 placeholder="Enter your email address"
//                                 {...field}
//                               />
//                             </div>
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="phone"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Phone Number</FormLabel>
//                           <FormControl>
//                             <div className="relative">
//                               <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                               <Input
//                                 className="pl-10"
//                                 placeholder="Enter your phone number"
//                                 {...field}
//                               />
//                             </div>
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="resumeUrl"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Resume/CV</FormLabel>
//                           <FormControl>
//                             <div className="relative">
//                               <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                               <Input
//                                 type="file"
//                                 className="pl-10"
//                                 accept=".pdf,.doc,.docx"
//                                 onChange={(e) => {
//                                   const file = e.target.files?.[0];
//                                   if (file) {
//                                     field.onChange(URL.createObjectURL(file));
//                                   }
//                                 }}
//                               />
//                             </div>
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="experience"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Relevant Experience</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Describe your relevant experience for this position"
//                               className="min-h-[120px]"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <FormField
//                       control={form.control}
//                       name="coverLetter"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Cover Letter (Optional)</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="Tell us why you're interested in this position"
//                               className="min-h-[120px]"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />

//                     <Button
//                       type="submit"
//                       className="w-full bg-blue-600 hover:bg-blue-700"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <span className="animate-spin mr-2">⏳</span>
//                           Submitting...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="mr-2 h-4 w-4" />
//                           Submit Application
//                         </>
//                       )}
//                     </Button>
//                   </form>
//                 </Form>
//               )}
//             </Card>
//           </div>

//           {/* Job Details */}
//           <div className="lg:w-1/2 order-1 lg:order-2">
//             <Card className="p-6 shadow-md">
//               <div className="mb-6">
//                 <Badge className="bg-blue-100 text-blue-700 mb-2">
//                   {job.category}
//                 </Badge>
//                 <h2 className="text-2xl font-bold mb-2">{job.title}</h2>

//                 <div className="flex flex-wrap gap-y-2 text-gray-600 mb-4">
//                   <div className="flex items-center mr-4">
//                     <MapPin className="h-4 w-4 mr-1" />
//                     <span>{job.location}</span>
//                   </div>
//                   <div className="flex items-center mr-4">
//                     <Briefcase className="h-4 w-4 mr-1" />
//                     <span>{job.type}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Calendar className="h-4 w-4 mr-1" />
//                     <span>Posted on {job.postedDate}</span>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4">
//                   <h3 className="text-lg font-semibold mb-3">
//                     Job Description
//                   </h3>
//                   <p className="text-gray-700 mb-4">{job.description}</p>

//                   <h3 className="text-lg font-semibold mb-3">Requirements</h3>
//                   <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
//                     {job.requirements?.map((req: string, index: number) => (
//                       <li key={index}>{req}</li>
//                     ))}
//                   </ul>

//                   <h3 className="text-lg font-semibold mb-3">
//                     Responsibilities
//                   </h3>
//                   <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
//                     {job.responsibilities?.map(
//                       (resp: string, index: number) => (
//                         <li key={index}>{resp}</li>
//                       )
//                     )}
//                   </ul>

//                   {job.salary && (
//                     <>
//                       <h3 className="text-lg font-semibold mb-3">
//                         Salary Range
//                       </h3>
//                       <p className="text-gray-700 mb-4">{job.salary}</p>
//                     </>
//                   )}

//                   <h3 className="text-lg font-semibold mb-3">
//                     Application Deadline
//                   </h3>
//                   <p className="text-gray-700">
//                     {job.deadline || "Open until filled"}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


































'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ChevronLeft, MapPin, Briefcase, Calendar, Send, User, Mail, Phone, FileText } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { jobsData } from '@/components/mocksData/data'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  resumeUrl: z.string().min(1, { message: 'Please upload your resume' }),
  coverLetter: z.string().optional(),
  experience: z.string().min(1, { message: 'Please describe your experience' }),
})

type FormValues = z.infer<typeof formSchema>

export default function JobApplicationPage() {
  const router = useRouter()
  const params = useParams()
  // Extracting jobId from URL path
  const jobId = params?.id || params?.[0]
  console.log("jobId from path:", jobId)
  
  const [job, setJob] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize the form with React Hook Form + Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      resumeUrl: '',
      coverLetter: '',
      experience: '',
    },
  })

  // Find the job data based on the ID
  useEffect(() => {
    if (jobId) {
    
      const foundJob = jobsData.find(job => job.id === jobId)
      
      if (foundJob) {
        console.log("Job found:", foundJob.title)
        setJob(foundJob)
      } else {
        setTimeout(() => {
        //   router.push('/jobs')
        }, 2000)
      }
    }
    // We no longer redirect if jobId is empty - this allows the page to properly load first
  }, [jobId, router])

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form submitted:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting application:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-medium text-gray-700">Loading job details...</div>
          {!jobId && (
            <div className="mt-4 text-red-600">
              No job ID found. Please select a job from the jobs page.
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-10 px-8">
        <div className="container mx-auto">
          <Button 
            variant="ghost" 
            className="text-white mb-4 p-0 hover:bg-blue-600"
            onClick={() => router.push('/jobs')}
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
              <h2 className="text-2xl font-semibold mb-6">Submit Your Application</h2>
              
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                    <p>Thank you for your interest in this position. We will review your application and contact you shortly.</p>
                  </div>
                  <Button onClick={() => router.push('/jobs')} className="bg-blue-600 hover:bg-blue-700">
                    Back to Job Listings
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input className="pl-10" placeholder="Enter your full name" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
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
                              <Input className="pl-10" type="email" placeholder="Enter your email address" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
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
                              <Input className="pl-10" placeholder="Enter your phone number" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                  const file = e.target.files?.[0]
                                  if (file) {
                                    field.onChange(URL.createObjectURL(file))
                                  }
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Relevant Experience</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your relevant experience for this position"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Letter (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us why you're interested in this position"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
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
                  </form>
                </Form>
              )}
            </Card>
          </div>
          
          {/* Job Details */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <Card className="p-6 shadow-md">
              <div className="mb-6">
                <Badge className="bg-blue-100 text-blue-700 mb-2">{job.category}</Badge>
                <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
                
                <div className="flex flex-wrap gap-y-2 text-gray-600 mb-4">
                  <div className="flex items-center mr-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Posted on {job.postedDate}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                    {job.requirements?.map((req: string, index: number) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                  <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                    {job.responsibilities?.map((resp: string, index: number) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                  
                  {job.salary && (
                    <>
                      <h3 className="text-lg font-semibold mb-3">Salary Range</h3>
                      <p className="text-gray-700 mb-4">{job.salary}</p>
                    </>
                  )}
                  
                  <h3 className="text-lg font-semibold mb-3">Application Deadline</h3>
                  <p className="text-gray-700">{job.deadline || 'Open until filled'}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
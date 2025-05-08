import cloudinary from "@/lib/cloudinary";
import { ConnectDB } from "@/lib/dbConnect";
import { JobApplicationModel } from "@/models/jobApplication.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectDB();
    const jobApplicationFetch = await JobApplicationModel.find();
    return NextResponse.json(
      {
        message: "Jobs Application Fetch Successfully",
        jobsApplicationData: jobApplicationFetch,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await ConnectDB();
    const formData = await request.formData();
    const JobSeekerId = formData.get("jobSeekerId") as string;
    const JobId = formData.get("jobId") as string;
    const FullName = formData.get("fullName") as string;
    const JobPosition = formData.get("jobPosition") as string;
    const Email = formData.get("email") as string;
    const Phone = formData.get("phone") as string;
    const City = formData.get("city") as string;
    const resumeUrl = formData.get("resumeUrl") as File | null;

    let resumeFileUrl = undefined;

    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes

    if (resumeUrl && resumeUrl.size > 0) {
      if (resumeUrl.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { message: "File size exceeds 2MB limit" },
          { status: 400 }
        );
      }
      try {
        const buffer = await resumeUrl.arrayBuffer();
        const base64File = Buffer.from(buffer).toString("base64");
        const dataUri = `data:${resumeUrl.type};base64,${base64File}`;

        // Use stream or direct file upload for better efficiency
        const uploadedFile = await cloudinary.uploader.upload(dataUri, {
          resource_type: "raw", // Use "raw" for PDFs and other non-image files
          folder: "Job Applications", // Folder name
          access_mode: "public",
        });

        console.log("Cloudinary URL:", uploadedFile.secure_url);

        resumeFileUrl = uploadedFile.secure_url;
      } catch (error) {
        console.error("Error uploading resume:", error); // More specific error logging
        return NextResponse.json(
          { message: "Failed to upload resume" },
          { status: 500 }
        );
      }
    }

    let dataSave = await JobApplicationModel.create({
      jobId: JobId,
      jobSeekerId: JobSeekerId,
      fullName: FullName,
      jobPosition: JobPosition,
      email: Email,
      phone: Phone,
      city: City,
      resumeUrl: resumeFileUrl,
    });
    dataSave = await dataSave.save();

    return NextResponse.json(
      { message: "Job Application Submitted", jobsApplicationData: dataSave },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: (error as Error).message },
      { status: 500 }
    );
  }
}

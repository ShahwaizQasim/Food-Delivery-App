import cloudinary from "@/lib/cloudinary";
import { ConnectDB } from "@/lib/dbConnect";
import { JobApplicationModel } from "@/models/jobApplication.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await ConnectDB();
    const formData = await request.formData();
    const JobSeekerId = formData.get("jobSeekerId") as string;
    const JobId = formData.get("jobId") as string;
    const FullName = formData.get("fullName") as string;
    const Email = formData.get("email") as string;
    const Phone = formData.get("phone") as string;
    const City = formData.get("city") as string;
    const resumeUrl = formData.get("resumeUrl") as File | null;

    let resumeFileUrl = undefined;

    if (resumeUrl && resumeUrl.size > 0) {
      try {
        const buffer = await resumeUrl.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");
        const uploadedImage = await cloudinary.uploader.upload(
          `data:${resumeUrl.type};base64,${base64Image}`,
          {
            folder: "Job Applications", // Replace this with your desired folder name
          }
        );

        resumeFileUrl = uploadedImage.secure_url;
      } catch (error) {
        console.error("Error uploading profile picture:", error);
        return NextResponse.json(
          { message: "Failed to upload profile picture" },
          { status: 500 }
        );
      }
    }

    let dataSave = await JobApplicationModel.create({
      jobId: JobId,
      jobSeekerId: JobSeekerId,
      fullName: FullName,
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

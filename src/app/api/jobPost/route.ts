import { ConnectDB } from "@/lib/dbConnect";
import { JobPostModel } from "@/models/postJob.model";
import { NextRequest, NextResponse } from "next/server";

interface JobPostInput {
  title: string;
  description: string;
  location: string;
  jobType: string;
  salary: string;
  category: string;
  experienceLevel: string;
  qualification: string;
  skillsRequired: string;
  responsibilities: string;
  contactEmail: string;
  deadline: string; // or Date if already parsed
}

export async function GET() {
  try {
    await ConnectDB();
    const jobPostDataGet = await JobPostModel.find();
    return NextResponse.json(
      { error: false, msg: "Job Post Successfully", jobsData: jobPostDataGet },
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
    const {
      title,
      description,
      location,
      jobType,
      salary,
      category,
      experienceLevel,
      qualification,
      skillsRequired,
      responsibilities,
      contactEmail,
      deadline,
    } = (await request.json()) as JobPostInput;

    if (
      !title ||
      !description ||
      !jobType ||
      !salary ||
      !category ||
      !experienceLevel ||
      !qualification ||
      !skillsRequired ||
      !responsibilities ||
      !contactEmail ||
      !deadline
    ) {
      return NextResponse.json(
        { error: true, message: "Incomplete input data" },
        { status: 400 }
      );
    }

    let Job_Post_Data_Save = await JobPostModel.create({
      title,
      description,
      location,
      jobType,
      salary,
      category,
      experienceLevel,
      qualification,
      skillsRequired,
      responsibilities,
      contactEmail,
      deadline,
    });

    Job_Post_Data_Save = await Job_Post_Data_Save.save();
    return NextResponse.json(
      { error: false, msg: "Job Fetch Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: (error as Error).message },
      { status: 500 }
    );
  }
}

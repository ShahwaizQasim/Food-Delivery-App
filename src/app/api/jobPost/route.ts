import { ConnectDB } from "@/lib/dbConnect";
import { JobPostModel } from "@/models/postJob.model";
import { NextRequest, NextResponse } from "next/server";

interface JobPostInput {
  title: string;
  description: string;
  location: string;
  jobType: string;
  salary: string;
  experienceLevel: string;
  qualification: string;
  skillsRequired: string[];
  responsibilites: string;
  contactEmail: string,
  deadline: string; // or Date if already parsed
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
      experienceLevel,
      qualification,
      skillsRequired,
      responsibilites,
      contactEmail,
      deadline,
    } = (await request.json()) as JobPostInput;

    if (
      !title ||
      !description ||
      !jobType ||
      !salary ||
      !experienceLevel ||
      !qualification ||
      !skillsRequired ||
      !responsibilites ||
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
      experienceLevel,
      qualification,
      skillsRequired,
      responsibilites,
      contactEmail,
      deadline,
    });

    Job_Post_Data_Save = await Job_Post_Data_Save.save();

    console.log(
      "recieved data",
      title,
      description,
      location,
      jobType,
      salary,
      experienceLevel,
      qualification,
      skillsRequired,
      contactEmail,
      responsibilites,

      deadline
    );
    return NextResponse.json(
      { error: false, msg: "Job Post Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { error: true, msg: (error as Error).message },
      { status: 500 }
    );
  }
}

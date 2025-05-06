import { ConnectDB } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await ConnectDB();

    const formData = await request.formData();
    console.log("formData", formData);

    const jobId = formData.get("jobId") as string;
    const jobSeekerId = formData.get("jobSeekerId") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;

    const resumeUrl = formData.get("resumeUrl") as File | null;
    let resumeUrl2 = undefined;

    console.log(
      "recieved Data",
      jobId,
      jobSeekerId,
      fullName,
      email,
      phone,
      city,
      resumeUrl
    );

    return NextResponse.json(
      { error: false, msg: "Application Submitted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: (error as Error).message },
      { status: 500 }
    );
  }
}

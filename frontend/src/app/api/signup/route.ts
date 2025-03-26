import { ConnectDB } from "@/lib/dbConnect";
import { UserModel } from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  let { userName, email, password } = await request.json();
  console.log("recieved Data", { userName, email, password });

  if (!userName || !email || !password) {
    return NextResponse.json(
      { error: true, message: "Incomplete input data" },
      { status: 400 }
    );
  }
  try {
    await ConnectDB();
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: true, message: "User Already Exist" },
        { status: 409 }
      );
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    let user = await new UserModel({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
   return NextResponse.json(
      { error: false, message: "SignUp Successfully", user: savedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}

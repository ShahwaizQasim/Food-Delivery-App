import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserModel } from "@/models/user.model";
import { ConnectDB } from "@/lib/dbConnect";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();
    const session: any = await getServerSession(authOptions);

    if (!session || !session.user) {
        return NextResponse.json(
            { message: 'You must be logged in to update your profile' },
            { status: 401 }
        );
    }

    const userId = session.user.id;

    if (!userId) {
      return NextResponse.json(
        { message: "User ID not found in session" },
        { status: 400 }
      );
    }

    const formData = await req.formData();

    const fullName = formData.get("name") as string;
    const email = formData.get("email") as string;
    const profileBio = formData.get("profileBio") as string;

    const profilePic = formData.get("profilePic") as File | null;
    let profilePicUrl = undefined;

    if (profilePic && profilePic.size > 0) {
      try {
        const buffer = await profilePic.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");
        const uploadedImage = await cloudinary.uploader.upload(
          `data:${profilePic.type};base64,${base64Image}`,
          {
            folder: "Job Portal", // Replace this with your desired folder name
          }
        );

        profilePicUrl = uploadedImage.secure_url;
      } catch (error) {
        console.error("Error uploading profile picture:", error);
        return NextResponse.json(
          { message: "Failed to upload profile picture" },
          { status: 500 }
        );
      }
    }

    let updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name: fullName,
        email,
        profileBio,
        ...(profilePicUrl && { profilePic: profilePicUrl }),
      },
      { new: true }
    );

    return NextResponse.json({
      message: "Profile updated successfully",
      profilePic: profilePicUrl,
      user: {
        name: updatedUser.name,
        email: updatedUser.email,
        profileBio: updatedUser.profileBio,
        profilePic: updatedUser.profilePic,
      },
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { message: "Failed to update profile" },
      { status: 500 }
    );
  }
}

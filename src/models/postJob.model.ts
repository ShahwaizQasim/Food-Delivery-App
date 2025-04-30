import mongoose, { Schema } from "mongoose";

const PostJobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    default: "Saylani Welfare Organization",
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    enum: ["Karachi", "Lahore", "Islamabad", "Remote", "Other"],
  },
  jobType: {
    type: String,
    required: true,
    enum: ["Full-time", "Part-time", "Internship", "Contract"],
  },
  salary: {
    min: { type: Number },
    max: { type: Number },
    currency: { type: String, default: "PKR" },
  },
  experienceLevel: {
    type: String,
    enum: ["Fresh", "1 Year", "2+ Years"],
    default: "Fresh",
  },
  qualification: {
    type: String,
    enum: ["Matric", "Intermediate", "Bachelor", "Master"],
    default: "Intermediate",
  },
  skillsRequired: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  responsibilites: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const JobPostModel =
  mongoose.models.jobPostData || mongoose.model("jobPostData", PostJobSchema);

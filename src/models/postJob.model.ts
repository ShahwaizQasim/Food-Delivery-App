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
  },
  jobType: {
    type: String,
    required: true,
    enum: ["Full-time", "Part-time", "Internship", "Contract"],
  },
  salary: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  experienceLevel: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    default: "Intermediate",
    required: true,
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
  responsibilities: {
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

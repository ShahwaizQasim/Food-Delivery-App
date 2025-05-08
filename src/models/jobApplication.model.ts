import mongoose, { Schema } from "mongoose";

const JobApplicationSchema: Schema = new Schema({
  jobSeekerId: { type: String, required: true },
  jobId: { type: String, required: true },
  fullName: { type: String, required: true },
  jobPosition:{type:String, required:true},
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  resumeUrl: { type: String, required: true },
});

export const JobApplicationModel =
  mongoose.models.JobApplication ||
  mongoose.model("JobApplication", JobApplicationSchema);

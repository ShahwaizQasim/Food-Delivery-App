import mongoose, { Schema } from 'mongoose';

interface JobApplication  {
  jobSeekerId: string;
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter?: string;
  appliedAt: Date;
}

const JobApplicationSchema: Schema = new Schema({
  jobSeekerId: { type: String, required: true },
  jobId: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: {type:String, required:true},
  resumeUrl: { type: String, required: true },
});


export const JobApplicationModel = mongoose.models.JobApllication || mongoose.model("JobApllication", JobApplicationSchema)
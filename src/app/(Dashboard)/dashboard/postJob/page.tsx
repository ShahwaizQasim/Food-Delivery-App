import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../layout';
import JobPostingForm from '@/components/jobPostingPage/jobpost';

const PostJobPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post New Job | Saylani Job Portal Admin</title>
      </Head>
      
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-2xl text-center font-bold text-gray-900">Post a New Job</h1>
            <p className="mt-1 text-sm text-gray-500 text-center">
              Create a new job listing that will be displayed on the Saylani Job Portal.
            </p>
          <JobPostingForm />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default PostJobPage;
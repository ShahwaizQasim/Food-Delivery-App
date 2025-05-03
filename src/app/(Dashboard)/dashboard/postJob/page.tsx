"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JobCard } from "@/components/jobCard/jobCard";
import { JobFilter } from "@/components/jobFilters/page";
import JobPostingForm from "@/components/jobPostingPage/jobpost";
import axios from "axios";

export default function PostJobPage() {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const jobsPerPage = 6;

  const fetchJobsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/jobPost");
      setFilteredJobs(response.data.jobsData);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

  const handleFilter = (filters) => {
    let filtered = [...filteredJobs];

    if (filters.keyword) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
          job?.description.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    if (filters.location && filters.location !== "all-locations") {
      filtered = filtered.filter(
        (job) => job?.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    if (filters.category && filters.category !== "all-categories") {
      filtered = filtered.filter(
        (job) => job?.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.type && filters.type !== "all-types") {
      filtered = filtered.filter(
        (job) => job?.type?.toLowerCase() === filters.type.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  };

  // Logic for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="min-h-screen">
      <div
        className="container mx-auto px-8 py-8 mt-4"
        style={{
          marginBottom: "20px",
        }}
      >
        <div className="container mx-auto flex justify-between">
          <h1 className="mt-2 text-[28px] font-bold text-[#1D4ED8]">
            Job Posted In Your Portal
          </h1>
          <button
            type="submit"
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75"
          >
            Post New Job
          </button>
        </div>

        {/* Filters */}
        <JobFilter onFilter={handleFilter} />

        {/* Job Results */}
        <div className="flex justify-between items-center mb-6 ">
          <div>
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"}{" "}
              Found
            </h2>
            <p className="text-gray-600 text-sm">
              Showing jobs{" "}
              {filteredJobs.length > 0
                ? `${indexOfFirstJob + 1}-${Math.min(
                    indexOfLastJob,
                    filteredJobs.length
                  )}`
                : "0"}{" "}
              of {filteredJobs.length}
            </p>
          </div>

          {totalPages > 1 && (
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>

        {filteredJobs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentJobs.map((job) => (
                <JobCard key={job?.id} {...job} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 mb-8">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="border-gray-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        className={
                          currentPage === page
                            ? "bg-saylani-green hover:bg-saylani-dark-green text-white"
                            : "border-gray-300 hover:bg-gray-50"
                        }
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="border-gray-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-md text-center py-16 px-4">
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filter criteria or check back later for new
              opportunities
            </p>
            <Button
              className="bg-saylani-green hover:bg-saylani-dark-green text-white"
              onClick={() =>
                handleFilter({
                  keyword: "",
                  location: "all-locations",
                  category: "all-categories",
                  type: "all-types",
                })
              }
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl mx-auto p-6 animate-fade-in-down max-h-screen overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  Post a New Job
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Form */}
              <div className="space-y-4">
                {/* Basic Job Information */}
                <JobPostingForm setIsModalOpen={setIsModalOpen} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

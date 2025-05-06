'use client'

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Search, MapPin, Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { JobCard } from '@/components/jobCard/jobCard';
import { JobFilter } from '@/components/jobFilters/page';
// import { jobsData } from '@/components/mocksData/data';
import axios from 'axios';

export default function JobsPage() {
  const [JobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const jobsPerPage = 6;

  const fetchJobsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/jobPost");
      setJobsData(response.data.jobsData)
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
    let filtered = [...JobsData];
    
    if (filters.keyword) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }
    
    if (filters.location && filters.location !== 'all-locations') {
      filtered = filtered.filter(job => 
        job.location.toLowerCase() === filters.location.toLowerCase()
      );
    }
    
    if (filters.category && filters.category !== 'all-categories') {
      filtered = filtered.filter(job => 
        job.category.toLowerCase() === filters.category.toLowerCase()
      );
    }
    
    if (filters.type && filters.type !== 'all-types') {
      filtered = filtered.filter(job => 
        job.type.toLowerCase() === filters.type.toLowerCase()
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-16 px-8">
        <div className="container mx-auto px-2">
          <h1 className="text-4xl font-bold">Career Opportunities</h1>
          <p className="mt-4 text-lg opacity-90">Discover meaningful work and grow your career with Saylani Welfare Trust</p>
        </div>
      </div>
      <div className="container mx-auto px-8 py-8 -mt-8">
        {/* Filters */}
        <JobFilter onFilter={handleFilter} />
        
        {/* Job Results */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
            </h2>
            <p className="text-gray-600 text-sm">
              Showing jobs {filteredJobs.length > 0 ? `${indexOfFirstJob + 1}-${Math.min(indexOfLastJob, filteredJobs.length)}` : '0'} of {filteredJobs.length}
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
                <JobCard key={job.id} {...job} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 mb-8">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="border-gray-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      className={currentPage === page 
                        ? "bg-saylani-green hover:bg-saylani-dark-green text-white" 
                        : "border-gray-300 hover:bg-gray-50"
                      }
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
            <p className="text-gray-600 mb-6">Try adjusting your filter criteria or check back later for new opportunities</p>
            <Button 
              className="bg-saylani-green hover:bg-saylani-dark-green text-white"
              onClick={() => handleFilter({
                keyword: '',
                location: 'all-locations',
                category: 'all-categories',
                type: 'all-types'
              })}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Search, MapPin, Briefcase, Calendar, ArrowRight } from 'lucide-react';

// Mock data for jobs
const jobsData = [
  {
    id: "1",
    title: "React Developer",
    location: "Karachi",
    type: "Full-time",
    category: "IT & Development",
    postedDate: "2 Apr 2025",
    deadline: "30 Apr 2025",
    description: "Join our team as a React developer to build modern web applications."
  },
  {
    id: "2",
    title: "Web Design Instructor",
    location: "Lahore",
    type: "Part-time",
    category: "Teaching & Education",
    postedDate: "5 Apr 2025",
    deadline: "25 Apr 2025",
    description: "Teach web design skills to aspiring students in our education program."
  },
  {
    id: "3",
    title: "Administration Manager",
    location: "Islamabad",
    type: "Full-time",
    category: "Administration",
    postedDate: "1 Apr 2025",
    deadline: "20 Apr 2025",
    description: "Oversee administrative operations and ensure smooth functioning of the organization."
  },
  {
    id: "4",
    title: "Mobile App Developer",
    location: "Karachi",
    type: "Full-time",
    category: "IT & Development",
    postedDate: "3 Apr 2025",
    deadline: "28 Apr 2025",
    description: "Create innovative mobile applications for iOS and Android platforms."
  },
  {
    id: "5",
    title: "Nurse",
    location: "Lahore",
    type: "Full-time",
    category: "Medical Staff",
    postedDate: "6 Apr 2025",
    deadline: "26 Apr 2025",
    description: "Provide quality healthcare services in our medical facility."
  },
  {
    id: "6",
    title: "Project Manager",
    location: "Karachi",
    type: "Contract",
    category: "Management",
    postedDate: "4 Apr 2025",
    deadline: "24 Apr 2025",
    description: "Lead project teams and ensure successful delivery of organizational initiatives."
  },
  {
    id: "7",
    title: "Office Assistant",
    location: "Hyderabad",
    type: "Full-time",
    category: "Administration",
    postedDate: "7 Apr 2025",
    deadline: "27 Apr 2025",
    description: "Support administrative functions and daily office operations."
  },
  {
    id: "8",
    title: "Math Teacher",
    location: "Islamabad",
    type: "Part-time",
    category: "Teaching & Education",
    postedDate: "8 Apr 2025",
    deadline: "29 Apr 2025",
    description: "Teach mathematics to students and help them develop problem-solving skills."
  },
  {
    id: "9",
    title: "Software Engineer",
    location: "Karachi",
    type: "Full-time",
    category: "IT & Development",
    postedDate: "9 Apr 2025",
    deadline: "30 Apr 2025",
    description: "Develop software solutions to meet business requirements and user needs."
  }
];

// Available locations, categories, and job types for filters
const availableLocations = [...new Set(jobsData.map(job => job.location))];
const availableCategories = [...new Set(jobsData.map(job => job.category))];
const availableTypes = [...new Set(jobsData.map(job => job.type))];

// JobCard Component
const JobCard = ({ id, title, location, type, category, postedDate, deadline, description }) => {
  const getTypeColor = () => {
    switch (type) {
      case 'Full-time': return 'bg-green-100 text-green-800';
      case 'Part-time': return 'bg-blue-100 text-blue-800';
      case 'Contract': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className='mx-auto'>
    <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <Badge className={`${getTypeColor()} font-medium text-xs px-2 py-1 rounded-md`}>
            {type}
          </Badge>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="text-sm">{category}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">Posted: {postedDate} • Deadline: {deadline}</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white"
        >
          Apply Now
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </Card>
    </div>
  );
};

// JobFilter Component
const JobFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: 'all-locations',
    category: 'all-categories',
    type: 'all-types'
  });
  
  const handleFilterChange = (field, value) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };
  
  return (
    <div className='container mx-auto  mt-8'>
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Find Your Perfect Job</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            className="pl-10"
            placeholder="Job title or keyword"
            value={filters.keyword}
            onChange={(e) => handleFilterChange('keyword', e.target.value)}
          />
        </div>
        
        <select
          className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-saylani-green"
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        >
          <option value="all-locations">All Locations</option>
          {availableLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        
        <select
          className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-saylani-green"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value="all-categories">All Categories</option>
          {availableCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        
        <select
          className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-saylani-green"
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
        >
          <option value="all-types">All Job Types</option>
          {availableTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </div>
    </div>
  );
};

export default function JobsPage() {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const handleFilter = (filters) => {
    let filtered = [...jobsData];
    
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
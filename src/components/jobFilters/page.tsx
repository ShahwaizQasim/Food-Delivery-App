"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

export const JobFilter = ({ onFilter }: any) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "all-locations",
    category: "all-categories",
    type: "all-types",
  });

  const [jobsData, setJobsData] = useState([]);

  const fetchJobsData = async () => {
    try {
      const response = await axios.get("/api/jobPost");
      setJobsData(response.data.jobsData);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchJobsData();
  }, []);

  // Available locations, categories, and job types for filters
  const availableLocations = [...new Set(jobsData.map((job) => job?.location))];
  const availableCategories = [
    ...new Set(jobsData.map((job) => job?.category)),
  ];
  const availableTypes = [...new Set(jobsData.map((job) => job.type))];

  const handleFilterChange = (field, value) => {
    const updatedFilters = { ...filters, [field]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  return (
    <div className="container mx-auto  mt-8">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Find Your Perfect Job</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Job title or keyword"
              value={filters.keyword}
              onChange={(e) => handleFilterChange("keyword", e.target.value)}
            />
          </div>

          <select
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-saylani-green"
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
          >
            <option value="all-locations">All Locations</option>
            {availableLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-saylani-green"
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="all-categories">All Categories</option>
            {availableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-saylani-green"
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
          >
            <option value="all-types">All Job Types</option>
            {availableTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

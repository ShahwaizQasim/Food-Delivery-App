import { MapPin, Briefcase, Calendar, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const JobCard = ({
  _id,
  title,
  location,
  jobType,
  category,
  postedDate,
  deadline,
  description,
}: any) => {
  const session = useSession();
  const router = useRouter();
  const getTypeColor = () => {
    switch (jobType) {
      case "Full-time":
        return "bg-green-100 text-green-800";
      case "Part-time":
        return "bg-blue-100 text-blue-800";
      case "Contract":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleClick = () => {
    const user = session?.data?.user;
    if (!user) {
      router.push("/login");
    }
  };

  return (
    <div className="mx-auto">
      <Card className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <Badge
              className={`${getTypeColor()} font-medium text-xs px-2 py-1 rounded-md`}
            >
              {jobType}
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
              <span className="text-sm">
                Posted: {postedDate} • Deadline: {deadline}
              </span>
            </div>
          </div>

          <Button
            onClick={handleClick}
            className="w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white"
          >
            <Link href={`/jobs/${_id}`} className="flex">
              Apply Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

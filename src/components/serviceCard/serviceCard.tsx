import { ArrowRight, ChevronRight } from "lucide-react";

const ServiceCard = ({ service }: { service: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="p-6">
      <div className="flex items-center mb-4">
        {service.icon}
        <h3 className="text-xl font-bold ml-3 text-gray-800">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="border-t border-gray-100 pt-4">
        <p className="font-medium text-gray-800 mb-2">Features:</p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="bg-blue-50 px-6 py-3">
      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
        Learn more <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

export default ServiceCard;

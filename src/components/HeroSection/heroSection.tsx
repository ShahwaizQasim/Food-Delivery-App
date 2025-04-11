import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-saylani-green to-saylani-dark-green text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Find Your Dream Job at Saylani
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover career opportunities at Saylani Welfare Trust and be a part
          of Pakistan's largest welfare organization
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/jobs">
            <Button
              size="lg"
              className="bg-white text-saylani-green hover:bg-gray-100"
            >
              Browse Jobs
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

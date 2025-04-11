import Navbar from "@/components/Navbar/navbar";
import { ConnectDB } from "@/lib/dbConnect";
import './globals.css'
import HeroSection from "@/components/HeroSection/heroSection";

export default async function Home() {
  await ConnectDB();
  return (
    <div className="container mx-auto border border-gray-500">
      <Navbar />
      <HeroSection />
      <h1>hello world</h1>
    </div>
  );
}

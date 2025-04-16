import Navbar from "@/components/Navbar/navbar";
import { ConnectDB } from "@/lib/dbConnect";
import './globals.css'
import HeroSection from "@/components/HeroSection/heroSection";
import Footer from "@/components/footer/footer";

export default async function Home() {
  await ConnectDB();
  return (
    <div className="">
      <HeroSection />
      <Footer />
    </div>
  );
}

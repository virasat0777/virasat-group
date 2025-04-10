import Image from "next/image";
import HomeOverview from "@/components/Home/homeOverview";
import CounterSection from "@/components/Home/homeCounter";
import HomeProjects from "@/components/Home/homeProjects";
import HomeAwards from "@/components/Home/homeAwards";
import HomeTestimonials from "@/components/Home/homeTestimonials";
import HomeNews from "@/components/Home/homeNews";
import HomeBlogs from "@/components/Home/homeBlogs";

export default function Home() {
  return (
    <>
      <div>
        <HomeOverview />
        <CounterSection />
        <HomeProjects />
        <HomeAwards />
        <HomeTestimonials />
        <HomeNews />
        <HomeBlogs />
      </div>
    </>
  );
}

import Image from "next/image";
import HomeOverview from "@/components/Home/homeOverview";
import CounterSection from "@/components/Home/homeCounter";
import HomeProjects from "@/components/Home/homeProjects";

export default function Home() {
  return (
    <>
      <div>
        <HomeOverview />
        <CounterSection />
        <HomeProjects />
      </div>
    </>
  );
}

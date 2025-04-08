import AboutUs from "../../components/AboutUs/AboutUs";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import WorkSteps from "../../components/WorkSteps/WorkSteps";

function HomePage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <Stats />
      <AboutUs />
      <WorkSteps />
    </div>
  );
}

export default HomePage;

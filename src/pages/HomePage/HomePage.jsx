import Advantages from "@/components/Advantages";
import Hero from "@/components/HeroSection/Hero";
import HomeCakesCategory from "@/components/HomeCakesCategory";
import PopularCakes from "@/components/PopularCakes";
import Feedback from "@/components/Feedback";
import CakesCard from "@/components/CakesCard/CakesCard";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCakesCategory />
      <Advantages />
      <PopularCakes />
      <CakesCard />
      <Feedback />
    </>
  );
};

export default HomePage;

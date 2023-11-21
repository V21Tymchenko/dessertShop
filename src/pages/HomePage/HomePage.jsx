import Advantages from "@/components/Advantages";
import Hero from "@/components/HeroSection/Hero";
import HomeCakesCategory from "@/components/HomeCakesCategory";
import PopularCakes from "@/components/PopularCakes";
import Feedback from "@/components/Feedback";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCakesCategory />
      <Advantages />
      <PopularCakes />
      <Feedback />
      <FeedbackForm />
    </>
  );
};

export default HomePage;

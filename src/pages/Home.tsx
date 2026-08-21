import { HeroSection } from '../components/sections/HeroSection';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { WhyUs } from '../components/sections/WhyUs';
import { WorkProcess } from '../components/sections/WorkProcess';
import { Testimonials } from '../components/sections/Testimonials';
import { FinalCTA } from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ServicesOverview />
      <WhyUs />
      <WorkProcess />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Home;

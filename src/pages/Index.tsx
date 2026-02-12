import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedTours from '@/components/home/FeaturedTours';
import FeaturedExperience from '@/components/home/FeaturedExperience';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <FeaturedTours />
      <FeaturedExperience />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Index;

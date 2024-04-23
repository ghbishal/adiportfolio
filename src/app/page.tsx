import { Education, Experience, Explore, Footer, Hero, Skills } from '@/features/home';

export default function HomePage() {
  return (
    <div className="flex flex-col bg-neutral-950 pt-8 sm:pt-0">
      <Hero />
      <Explore />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

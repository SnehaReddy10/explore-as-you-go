import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import MissionStatement from '../components/MissionStatement';
import Projects from '../components/Projects';

function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <About />
      <MissionStatement />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default Home;

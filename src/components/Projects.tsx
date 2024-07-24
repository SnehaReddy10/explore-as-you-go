import { useEffect } from 'react';
import Button from '../utils/Button';
import Title from '../utils/Title';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      className="flex flex-col gap-3 overflow-hidden"
    >
      <Title title="Our Projects" />
      <div className="grid grid-cols-2 gap-2">
        <img
          src="/assets/imgs/attraction5.jpg"
          alt="attraction5"
          className="w-full"
        />
        <img
          src="/assets/imgs/attraction6.jpg"
          alt="attraction5"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img src="/assets/imgs/attraction7.jpg" alt="attraction5" />
        <img src="/assets/imgs/attraction8.jpg" alt="attraction5" />
        <img src="/assets/imgs/attraction9.jpg" alt="attraction5" />
      </div>
      <div className="flex justify-end">
        <Button
          text="All projects"
          isDark={true}
          className=""
          url={'projects'}
        />
      </div>
    </div>
  );
}

export default Projects;

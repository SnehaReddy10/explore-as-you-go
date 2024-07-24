import { projects } from '../static/Projects';
import Button from '../utils/Button';
import Title from '../utils/Title';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="flex flex-col gap-8"
    >
      <div>
        <Title title="Our" />
        <Title title="Projects" isDark={true} />
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((x) => (
          <div className="flex flex-col md:flex-row gap-6 bg-gray-3 max-sm:pb-5 max-sm:border-b-[1px] max-sm:border-gray-1">
            <img src={`/assets/imgs/${x.img}.jpg`} alt={x.title} />
            <div className="pe-8 flex flex-col gap-2 justify-around">
              <h3 className="text-gray-4 text-2xl font-thin">{x.title}</h3>
              <p className="text-gray-9 text-balance text-xxs">
                {x.description}
              </p>
              <Button text="view more" url={`${x.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

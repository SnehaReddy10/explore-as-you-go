import Title from '../utils/Title';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MissionStatement() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      className="my-20"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <Title title="Main Focus/Mission Statement" />
      <div className="flex flex-col md:flex-row gap-4 justify-around my-2">
        <div className="flex gap-3 items-center md:w-1/3">
          <span className="text-9xl text-gray-2 font-bold">1</span>
          <p className="text-xs text-gray-9">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to.
          </p>
        </div>
        <div className="flex gap-3 items-center md:w-1/3">
          <span className="text-9xl text-gray-2 font-bold">2</span>
          <p className="text-xs text-gray-9">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionStatement;

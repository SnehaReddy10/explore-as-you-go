import Title from '../utils/Title';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Certifications() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      data-aos-easing="ease-out"
      className="flex flex-col gap-8"
    >
      <div>
        <Title title="COMPANY" />
        <Title title="Certifications" isDark={true} />
      </div>
    </div>
  );
}

export default Certifications;

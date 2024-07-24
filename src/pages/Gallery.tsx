import { useEffect } from 'react';
import Title from '../utils/Title';
import Aos from 'aos';
import 'aos/dist/aos.css';

const photoGalleryImages = [
  {
    id: 6,
    link: 'atrraction10',
  },
  {
    id: 6,
    link: 'attraction1',
  },
  {
    id: 6,
    link: 'attraction2',
  },
  {
    id: 6,
    link: 'attraction3',
  },
  {
    id: 6,
    link: 'atrraction15',
  },
  {
    id: 6,
    link: 'atrraction14',
  },
  {
    id: 6,
    link: 'atrraction13',
  },
  {
    id: 6,
    link: 'atrraction12',
  },
  {
    id: 6,
    link: 'atrraction11',
  },
  {
    id: 6,
    link: 'atrraction10',
  },
];

function Gallery() {
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
        <Title title="Photo" />
        <Title title="gallery" isDark={true} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2">
        {photoGalleryImages.map((x) => (
          <img src={`/assets/imgs/${x.link}.jpg`} className="h-56 md:h-96" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

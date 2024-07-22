import Title from '../utils/Title';

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
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title title="Photo" />
        <Title title="gallery" isDark={true} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2">
        {photoGalleryImages.map((x) => (
          <img src={`/assets/imgs/${x.link}.jpg`} className="h-56 md:h-72" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

import Button from '../utils/Button';
import Title from '../utils/Title';

const projects = [
  {
    id: 1,
    img: 'attraction5',
    title: 'Sample project 1',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. ',
  },
  {
    id: 2,
    img: 'attraction6',
    title: 'Sample project 2',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. ',
  },
  {
    id: 3,
    img: 'attraction7',
    title: 'Sample project 3',
    description:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. ',
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <Title title="Our" />
        <Title title="Projects" isDark={true} />
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((x) => (
          <div className="flex gap-6 bg-gray-3">
            <img src={`/assets/imgs/${x.img}.jpg`} alt={x.title} />
            <div className="pe-8 flex flex-col justify-around">
              <h3 className="text-gray-4 text-2xl font-thin">{x.title}</h3>
              <p className="text-gray-9 text-balance text-xxs">
                {x.description}
              </p>
              <Button text="view more" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

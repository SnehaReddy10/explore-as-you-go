import { useLocation } from 'react-router-dom';
import { projects } from '../static/Projects';
import Button from '../utils/Button';

function Project() {
  const { pathname } = useLocation();
  const id = pathname.slice(10, pathname.length);

  const project = projects.find((x) => x.id.toString() == id);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex max-sm:flex-col gap-10">
        <img
          src={`/assets/imgs/${project?.img}.jpg`}
          alt={project?.title}
          className="md:w-1/2"
        />
        <div className="md:w-1/2 flex flex-col justify-around max-sm:gap-4 my-4">
          <h3 className="text-xl text-gray-9 uppercase font-semibold tracking-widest">
            {project?.title}
          </h3>
          <p className="text-xs">{project?.description}</p>
          {/* TODO: Add map */}
          <Button text="see in map" isDark={true} />
        </div>
      </div>
      <div className="flex max-sm:grid max-sm:grid-cols-2 gap-2">
        {project?.moreImages?.map((x) => (
          <div className="flex">
            <img src={`/assets/imgs/${x}.jpg`} alt={x} className="h-72 w-64" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

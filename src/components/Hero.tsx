import { projects } from '../static/Projects';
import Button from '../utils/Button';
import Title from '../utils/Title';

const project = projects.find((x) => x.id == 1);

function Hero() {
  return (
    <div className="flex flex-col animate-fadeIn md:flex-row gap-3 md:gap-0 justify-between my-2">
      <div className="md:h-screen flex flex-col justify-center">
        <Title className="col-span-1 w-full md:w-1/4" title="EXPLORE" />
        <Title
          className="col-span-1 w-full md:w-1/4"
          title="AS YOU GO"
          isDark={true}
        />
      </div>
      <div className="relative col-span-2 h-full w-full md:h-[34rem] md:w-2/4">
        <img
          src={`/assets/imgs/${project?.img}.jpg`}
          alt=""
          className="md:h-[34rem]"
        />
        <Button
          text="view project"
          className="absolute bottom-0"
          url={`/projects/${project?.id}`}
        />
      </div>
    </div>
  );
}

export default Hero;

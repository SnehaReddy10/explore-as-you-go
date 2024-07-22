import Button from '../utils/Button';
import Title from '../utils/Title';

function Hero() {
  return (
    <div className="flex justify-between my-2">
      <div className="h-screen flex flex-col justify-center">
        <Title className="col-span-1 w-1/4" title="EXPLORE" />
        <Title className="col-span-1 w-1/4" title="AS YOU GO" isDark={true} />
      </div>
      <div className="relative col-span-2 h-[34rem] w-2/4">
        <img src="/assets/imgs/attraction1.jpg" alt="" className="h-[34rem]" />
        <Button text="view project" className="absolute bottom-0" />
      </div>
    </div>
  );
}

export default Hero;

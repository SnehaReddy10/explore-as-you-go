import Button from '../utils/Button';
import Title from '../utils/Title';

function About() {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <div className="flex flex-col gap-2">
        <img
          src="/assets/imgs/attraction2.jpg"
          alt="attraction2"
          className="h-72 w-full"
        />
        <img
          src="/assets/imgs/attraction4.jpg"
          alt="attraction4"
          className="h-32 w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <img
          src="/assets/imgs/attraction2.jpg"
          alt="attraction2"
          className="h-80 w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Title title="About" />
        <p className="text-gray-9 text-balance">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </p>
        <Button text="Read more" />
      </div>
    </div>
  );
}

export default About;

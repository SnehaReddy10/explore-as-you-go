import Button from '../utils/Button';
import Title from '../utils/Title';

function Contact() {
  return (
    <div className="flex gap-32 justify-between">
      <div className="flex flex-col gap-4 text-xxs py-5">
        <div>
          <Title title="Contact" />
          <Title title="Information" isDark={true} />
        </div>
        <div>
          <p className="font-bold">Company Name</p>
          <p className="text-gray-4">1234 Sample Street Austin Texas 76401</p>
        </div>
        <div>
          <p className="font-bold">512.333.2222</p>
        </div>
        <div className="text-gray-4">sampleemail@gmail.com</div>
        <Button text="contact us" isDark={true} />
      </div>
      <img
        src="/assets/imgs/contact-map.png"
        alt="contact-map"
        className="w-full h-72 border-y-[2px] border-b-gray-10 border-l-[2px]"
      />
    </div>
  );
}

export default Contact;

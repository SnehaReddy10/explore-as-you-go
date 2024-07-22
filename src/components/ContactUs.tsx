import Button from '../utils/Button';
import Input from '../utils/Input';
import Title from '../utils/Title';

function ContactUs() {
  return (
    <div className="flex flex-col md:gap-4">
      <Title title="Contact us" />
      <div className="flex flex-col-reverse md:flex-row md:gap-4">
        <div className="w-1/3">
          <Input placeholder="Name" inputType="text" />
          <Input placeholder="Phone Number" inputType="number" />
          <Input placeholder="Email" inputType="email" />
          <Input placeholder="Interested in" inputType="text" />
          <Input placeholder="Message" inputType="text" isTextBox={true} />
        </div>
        <div className="hidden md:flex md:w-2/3">
          <img
            src="/assets/imgs/customer-care.jpg"
            alt=""
            className="w-full mx-3"
          />
        </div>
      </div>
      <div className="max-md:flex max-md:justify-end">
        <Button text="Send Email" isDark={true} />
      </div>
    </div>
  );
}

export default ContactUs;

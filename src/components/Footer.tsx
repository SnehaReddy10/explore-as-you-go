import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

function Footer() {
  return (
    <div className="bg-gray-10 text-white pt-10 mt-10">
      <div className="flex gap-5 justify-around text-xxs pb-10">
        <img
          src="/assets/imgs/attraction1.jpg"
          alt="attraction1"
          className="w-14 h-10"
        />
        <div className="flex gap-14">
          <div className="flex flex-col gap-2">
            <p className="font-bold mb-1">Information</p>
            <p>Main</p>
            <p>Gallery</p>
            <p>Projects</p>
            <p>Certfications</p>
            <p>Contacts</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold mb-1">Contacts</p>
            <div className="flex gap-2">
              <MapPin />
              <p className="">1234 Sample Street Austin Texas 78704</p>
            </div>
            <div className="flex gap-2">
              <Phone />
              <p>512.333.2222</p>
            </div>
            <div className="flex gap-2">
              <Mail />
              <p>sampleemail@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold mb-1">Social Media</p>
          <div className="flex gap-4 transition-all ease-in">
            <Facebook className="hover:fill-white" />
            <Twitter className="hover:fill-white" />
            <Linkedin className="hover:fill-white" />
            <Instagram className="hover:fill-white hover:text-gray-10" />
          </div>
        </div>
      </div>
      <p className="text-center py-3 text-[0.55rem] border-t-[0.01px] border-gray-4 text-gray-1">
        &#169; All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;

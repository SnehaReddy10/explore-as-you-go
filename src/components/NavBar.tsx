import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    title: 'main',
    link: '',
  },
  {
    title: 'gallery',
    link: 'gallery',
  },
  {
    title: 'projects',
    link: 'projects',
  },
  {
    title: 'certifications',
    link: 'certifications',
  },
  {
    title: 'contacts',
    link: 'contacts',
  },
];

function NavBar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-between mx-4 my-4 md:mx-40">
      <div>
        <img src="" alt="" />
      </div>
      <div className="hidden md:flex md:gap-4">
        {navItems.map((x) => {
          const isSelected = pathname == '/' + x.link;
          return (
            <Link
              className={`uppercase px-2 md:px-3 text-xxs tracking-widest text-gray-9 hover:font-semibold ${
                isSelected ? 'border-y-[1px] border-gray-9' : ''
              }`}
              to={x.link}
            >
              {x.title}
            </Link>
          );
        })}
      </div>
      <div className="flex relative md:hidden justify-end">
        <Menu onClick={() => setOpenMenu((x) => !x)} />
        {openMenu && (
          <div className="absolute top-5 bg-gray-3 end-0 flex flex-col gap-2 z-10">
            {navItems.map((x) => {
              const isSelected = pathname == '/' + x.link;
              return (
                <Link
                  className={`uppercase px-2 md:px-3 text-xxs tracking-widest text-gray-9 hover:font-semibold ${
                    isSelected ? 'border-y-[1px] border-gray-9' : ''
                  }`}
                  to={x.link}
                >
                  {x.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;

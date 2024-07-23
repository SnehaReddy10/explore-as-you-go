import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

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
    <div className="flex items-center justify-around my-4 md:mx-40">
      <div>
        <Logo isDark={true} />
      </div>
      <div className="hidden mx-4 md:flex md:gap-4">
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
        <Menu className="mx-4" onClick={() => setOpenMenu((x) => !x)} />
        {openMenu && (
          <div className="absolute animate-slideInRight transition-all ease-in-out top-5 bg-gray-3 end-0 flex flex-col gap-2 z-10">
            <div
              onClick={() => setOpenMenu((x) => !x)}
              className={`uppercase px-2 py-1 text-xxs tracking-widest text-gray-1 bg-gray-9 hover:font-semibold`}
            >
              Explore
            </div>
            {navItems.map((x) => {
              const isSelected = pathname == '/' + x.link;
              return (
                <Link
                  onClick={() => setOpenMenu((x) => !x)}
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

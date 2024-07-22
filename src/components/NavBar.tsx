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

  return (
    <div className="flex justify-around my-4 mx-40">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex gap-4">
        {navItems.map((x) => {
          const isSelected = pathname == '/' + x.link;
          return (
            <Link
              className={`uppercase px-3 text-xxs tracking-widest text-gray-9 hover:font-semibold ${
                isSelected ? 'border-y-[1px] border-gray-9' : ''
              }`}
              to={x.link}
            >
              {x.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;

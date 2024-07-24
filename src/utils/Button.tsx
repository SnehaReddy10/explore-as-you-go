import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Button({ text, isDark, className, url }: any) {
  return (
    <Link
      to={url}
      className={`${className} flex gap-3 hover:gap-4 transition-all ease uppercase justify-center items-center w-40 h-10 text-xxs  tracking-wider p-4 ${
        isDark
          ? 'bg-gray-9 hover:bg-gray-10 text-white'
          : 'bg-white text-gray-9 hover:bg-gray-2'
      }`}
    >
      {text}
      <MoveRight className="h-5 w-4 hover:stroke-2" strokeWidth="1px" />
    </Link>
  );
}

export default Button;

import { MoveRight } from 'lucide-react';

function Button({ text, isDark, className }: any) {
  return (
    <div
      className={`${className} flex gap-3 hover:gap-4 transition-all ease uppercase justify-center items-center w-40 h-10 text-xxs  tracking-wider p-4 ${
        isDark ? 'bg-gray-9 text-white' : 'bg-white text-gray-9'
      }`}
    >
      {text}
      <MoveRight className="h-5 w-4" strokeWidth="1px" />
    </div>
  );
}

export default Button;

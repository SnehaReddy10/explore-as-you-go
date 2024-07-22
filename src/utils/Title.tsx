function Title({ title, isDark }: any) {
  return (
    <div
      className={`${
        isDark ? 'text-gray-9 font-bold' : 'text-gray-4 font-thin'
      } text-4xl capitalize text-balance`}
    >
      {title}
    </div>
  );
}

export default Title;

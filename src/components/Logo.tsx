function Logo({ isDark }: any) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className={`flex gap-[0.5rem]`}>
        <div
          className={`${
            isDark ? 'bg-gray-9' : 'bg-white'
          } w-2 h-14 rounded-e-sm`}
        ></div>
        <div className={`relative`}>
          <div
            className={`h-10 w-[0.34rem] ${
              isDark ? 'bg-gray-9' : 'bg-white'
            } rounded-t-sm`}
          ></div>
          <div
            className={`absolute top-7 left-[0.22rem] ${
              isDark ? 'bg-white' : 'bg-gray-9'
            } h-4 w-1 rotate-[15deg]`}
          ></div>
          <div
            className={`absolute top-7 -left-[0.14rem] ${
              isDark ? 'bg-white' : 'bg-gray-9'
            } h-4 w-1 -rotate-[15deg]`}
          ></div>
        </div>
        <div className={`relative ml-2`}>
          <div
            className={`absolute left-0 w-2 h-3 rounded-t-sm ${
              isDark ? 'bg-gray-9' : 'bg-white'
            }`}
          ></div>
          <div
            className={`absolute left-[3px] top-3 w-1 h-2 ${
              isDark ? 'bg-gray-9' : 'bg-white'
            }`}
          ></div>
          <div
            className={`absolute -left-[2.5px] top-4 w-3 h-3 rounded-full ${
              isDark ? 'bg-gray-9' : 'bg-white'
            }`}
          ></div>
          <div className={`rotate-[25deg] absolute top-4 -left-[0.25rem] w-1`}>
            <div
              className={`h-10 w-1 ${
                isDark ? 'bg-gray-9' : 'bg-white'
              } rounded-t-sm`}
            ></div>
            <div
              className={`absolute top-7 left-[0.23rem] ${
                isDark ? 'bg-white' : 'bg-gray-9'
              } h-4 w-1 rotate-[15deg]`}
            ></div>
            <div
              className={`absolute top-7 -left-[0.23rem] ${
                isDark ? 'bg-white' : 'bg-gray-9'
              } h-4 w-1 -rotate-[15deg]`}
            ></div>
          </div>
          <div
            className={`absolute top-4 left-[0.4rem] ${
              isDark ? 'bg-gray-9' : 'bg-white'
            } w-1 h-7 -rotate-[25deg]`}
          ></div>
          <div
            className={`absolute top-[2.9rem] left-[0.96rem] ${
              isDark ? 'bg-gray-9' : 'bg-white'
            } w-1 h-2 rounded-b-sm -rotate-[25deg]`}
          ></div>
          <div
            className={`absolute -left-[0.24rem] top-10 w-2 h-2 rounded-full ${
              isDark ? 'bg-white' : 'bg-gray-9'
            }`}
          ></div>
        </div>
      </div>
      <p
        className={`text-xxs font-semibold ${
          isDark ? 'text-gray-9' : 'text-white'
        }`}
      >
        EXPLORE AS YOU GO
      </p>
    </div>
  );
}

export default Logo;

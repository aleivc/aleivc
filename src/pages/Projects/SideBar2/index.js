const SideBar2 = () => {
  return (
    <div className="sidebar">
      <div className="h-screen flex items-end justify-end px-4 pb-6">
        <button className="relative z-30 peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition">
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 mx-auto"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
              />
            </svg>
          </span>
        </button>
        <div className="z-20 fixed top-0 -left-96 w-9/12 h-screen bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-75 duration-200"></div>
        <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-30 opacity-0 peer-focus:opacity-100 transition duration-200"></div>
      </div>
    </div>
  );
};

export default SideBar2;

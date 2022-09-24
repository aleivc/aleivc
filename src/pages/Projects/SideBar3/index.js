const SideBar3 = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <aside className="fixed overflow-hidden w-16 h-screen left-0 top-0 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 hover:w-56 hover:shadow-2xl">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center h-16 pl-2 border-b border-gray-300 dark:border-gray-700">
              <a href="">
                <img
                  className="w-12 h-12"
                  src="https://see.fontimg.com/api/renderfont4/Wy2VY/eyJyIjoiZHciLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYifQ/QQ/candydaycolorpersonaluse-bold.png"
                  alt="Funky fonts"
                />
              </a>
            </div>
            <div>
              <ul>
                <li className="w-max space-y-4"></li>
                <li className="w-max space-y-4"></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <main className="px-2 ml-16">
        <div className="2xl:container mx-auto space-y-6">
          <div className="h-16 border-b border-gray-300 dark:border-gray-700"></div>
          <div className="px-2 lg:px-12">
            <div className="flex items-center justify-center h-96 rounded-2xl border border-dashed border-gray-300">
              <span className="text-gray-500 dark:text-gray-200">Content</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SideBar3;

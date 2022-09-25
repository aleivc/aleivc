import SideBar from "../pages/Projects/SideBar";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div className="ml-16 h-screen">{children}</div>
    </div>
  );
};

export default BasicLayout;

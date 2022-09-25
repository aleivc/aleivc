import SideBar from "../components/SideBar";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div className="ml-16 h-screen">{children}</div>
    </div>
  );
};

export default BasicLayout;

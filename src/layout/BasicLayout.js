import SideBar from "../components/SideBar";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

import SideBar from "../components/SideBar";

export const BasicLayout = ({ children }) => {
  const href = window.location.href;
  console.log(href.includes("others/"));
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

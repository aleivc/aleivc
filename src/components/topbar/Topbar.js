import "./topbar.scss";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aleivc
          </a>
          <div className="itemContainer">
            <MenuBookIcon erson className="icon" />
            <span>最新文章</span>
          </div>
          <div className="itemContainer">
            <ContactMailIcon className="icon" />
            <span>简历下载</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburge"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

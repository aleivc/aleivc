import "./menu.scss";

const conf = [
  {
    text: "intro",
  },
  {
    text: "profile",
  },
  {
    text: "works",
  },
  {
    text: "testimonials",
  },
  {
    text: "contact",
  },
];

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {conf.map((item) => (
          <li key={item.text} onClick={() => setMenuOpen(false)}>
            <a href={"#" + item.text}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

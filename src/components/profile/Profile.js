import React from "react";
import "./profile.scss";
import { data } from "../../mock/data";

const Profile = () => {
  const [selected, setSelected] = React.useState(data[0]["title"]);
  const [content, setContent] = React.useState(data[0]["content"]);
  return (
    <div className="profile" id="profile">
      <h1>profile</h1>
      <ul>
        {data.map((item) => (
          <li
            className={selected === item.title ? "active" : ""}
            key={item.title}
            onClick={() => {
              setSelected(item.title);
              setContent(item.content);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="container">
        {content.map((item) => (
          <a key={item.name} href="#works">
            <div key={item.name} className="item">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;

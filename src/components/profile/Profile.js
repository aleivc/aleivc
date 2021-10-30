import React from "react";
import "./profile.scss";
import ProfileList from "./../profileList/profileList";

const data = [
  {
    title: "featured",
    content: [
      {
        name: "个人站点",
        img: "assets/feature1.png",
        rediret: "",
      },
      {
        name: "地图应用",
        img: "assets/feature2.png",
        redirect: "",
      },
      {
        name: "房地产应用",
        img: "assets/feature3.png",
        redirect: "",
      },
      {
        name: "其它",
        img: "assets/others1.png",
        redirect: "",
      },
    ],
  },
  {
    title: "Web App",
    content: [
      {
        name: "地图应用",
        img: "assets/feature2.png",
        redirect: "",
      },
    ],
  },
  {
    title: "Mobile App",
    content: [
      {
        name: "房地产应用",
        img: "assets/feature3.png",
        redirect: "",
      },
    ],
  },
  {
    title: "Design",
    content: [
      {
        name: "其它",
        img: "assets/feature3.png",
        redirect: "",
      },
    ],
  },
  {
    title: "Others",
    content: [
      {
        name: "其它",
        img: "assets/others1.png",
        redirect: "",
      },
    ],
  },
];

export default function () {
  const [selected, setSelected] = React.useState(data[0]["title"]);
  const [content, setContent] = React.useState([]);
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
          <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

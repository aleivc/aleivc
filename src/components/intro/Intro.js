import React from "react";
import "./intro.scss";
import { init } from "ityped";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Person from "@mui/icons-material/Person";
import Mail from "@mui/icons-material/Mail";

const icons = [
  {
    src: "assets/icons/codesandbox.png",
    redirect: "https://codesandbox.io/s/inspiring-bird-1hh10",
  },
  {
    src: "assets/icons/bilibili.png",
    redirect: "https://space.bilibili.com/276332192?spm_id_from=333.999.0.0",
  },
  {
    src: "assets/icons/github.png",
    redirect: "https://github.com/aleivc",
  },
  {
    src: "assets/icons/youtube.png",
    redirect: "https://www.youtube.com/channel/UCoHlwZFRQLb8Uurs-JC7dew",
  },
  {
    src: "assets/icons/zhihu.png",
    redirect: "https://www.zhihu.com/people/lei-hong-er",
  },
];

const Intro = () => {
  const textRef = React.useRef();
  React.useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["React", "Express", "Linux"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="up">
            <h2>你好，我叫</h2>
            <h1>雷红尔</h1>
            <h3>
              从事于前端开发, 擅长于 <span ref={textRef}></span>
            </h3>
          </div>
          <div className="down">
            <h4>常混迹于这些地方</h4>
            <ul>
              {icons.map((icon) => (
                <li key={icon.src}>
                  <a href={icon.redirect} target="_blank">
                    <img src={icon.src} alt="" />
                  </a>
                </li>
              ))}
            </ul>
            <h4>手机号同微信，也可以通过邮件联系我</h4>
            <div className="info">
              <div className="itemContainer">
                <Person className="icon" />
                <span>+86 151 2930 2630 </span>
              </div>
              <div className="itemContainer">
                <Mail className="icon" />
                <span>aleivc@163.com</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#profile">
          <KeyboardArrowDownIcon sx={{ fontSize: 60 }} />
        </a>
      </div>
    </div>
  );
};

export default Intro;

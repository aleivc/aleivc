import { useState } from "react";

import TopBar from "../../components/topbar/Topbar";
import Intro from "../../components/intro/Intro";
import Profile from "../../components/profile/Profile";
import Works from "../../components/works/Works";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import Menu from "../../components/menu/Menu";

// import "./index.scss";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Profile />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default Home;

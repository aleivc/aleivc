import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Profile from "./components/profile/Profile";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

function App() {
  return (
		<div className="app">
			<TopBar />
			<div className="sections">
				<Intro />
				<Profile />
				<Works />
				<Testimonials />
				<Contact />
			</div>
		</div>
	)
}

export default App;

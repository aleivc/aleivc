import "./menu.scss";

export default function({menuOpen}){
	return (
		<div className={"menu " + (menuOpen && "active")}>
			<ul>
				<li>
					<a href="#Intro">Intro</a>
				</li>
				<li>
					<a href="#profile">profile</a>
				</li>
				<li>
					<a href="#works">works</a>
				</li>
				<li>
					<a href="#testimonials">testimonials</a>
				</li>
				<li>
					<a href="#contact">contact</a>
				</li>
			</ul>
		</div>
	)
}

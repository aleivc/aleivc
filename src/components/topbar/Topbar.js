import "./topbar.scss"
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';

export default function({menuOpen, setMenuOpen}){
	return (
		<div className={"topbar " + (menuOpen && "active")}>
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">aleivc</a>
					<div className="itemContainer">
						<Person className="icon" />
						<span>+86 15129302630 </span>
					</div>
					<div className="itemContainer">
						<Mail className="icon" />
						<span>aleivc@163.com</span>
					</div>
				</div>		
				<div className="right">
					<div className="hamburge" onClick={() => {setMenuOpen(!menuOpen)}}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>	
				</div>		
			</div>
		</div>
	)
}

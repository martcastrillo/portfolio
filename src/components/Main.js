import landing from "../images/landing.png";
import { NavLink } from "react-router-dom";
import "../styles/Index.scss";
function Main() {
    return (
      <div>
     
	 <body className="body">
				<div className="landing-text">
				<NavLink to="/Dev" className="landingtext" id="contact-link">
					dev
				</NavLink>
				<NavLink to="/Video" className="landingtext" id="contact-link">
				video
				</NavLink>

				<NavLink to="/Graphic" className="landingtext" id="contact-link">
				graphic
				</NavLink>
					
				</div>
				<img className="landing-image" src={landing} alt="" />
			</body>
    
      </div>
    );
  }

  export default Main;
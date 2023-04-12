import landing from "../images/landing.png";
import { Routes, Route, NavLink } from "react-router-dom";
import Dev from "./Dev";
import Graphic from "./Graphic";
import Video from "./Video";

import "../styles/Index.scss";
function Main() {
	return (
		<div>
			<div className="body">
				<div className="menu-landing">
					<div className="landing-text-box">
						<h1 className="main_landingtext">Marta Castrillo</h1>
						<h2 className="landingtext">Porfolio</h2>
						
						<div className="landing_offices">
							Junior Web Developer, viendo la gran crecida de este sector y por
							ser una persona curiosa me adentro en el mundo de la programación.
							
						</div>
						<div className="landing_offices">
							Soy editora de vídeo y diseñadora gráfica, también he realizado
							otras labores como ayudante de dirección, ayudante de cámara y
							producción según la necesidad. </div>
						<div className="landing_offices">En otra vida también fui agente de viajes. <p></p></div>
						<div className="landing_offices">
							Soy una persona enérgica, trabajadora, colaboradora, con ganas de
							aprender y siempre estoy muy motivada.
						</div>
						<div className="landing_offices_options">
							 <NavLink to="/Dev">
								<p className="mini_link">web developer</p>
							</NavLink>
							<NavLink to="/Video">
								<p className="mini_link">video editor</p>
							</NavLink>
							{/* <NavLink to="/Graphic"> 
								<p className="mini_link">graphic design</p>
						</NavLink> */}
						</div>
					</div>
					<img className="landing-image" src={landing} alt="" />
				</div>
			</div>
			<Routes>
				<Route path="/Dev" element={<Dev />}></Route>
				<Route path="/Graphic" element={<Graphic />}></Route>
				<Route path="/Video" element={<Video />}></Route>{" "}
			</Routes>
		</div>
	);
}

export default Main;

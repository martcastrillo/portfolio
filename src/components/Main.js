import landing from "../images/landing.png";
import "../styles/Index.scss";
function Main() {
    return (
      <div>
	 <body className="body">
				<div className="menu-landing">
					<div className="landing-text-box">
						<h1  className="main_landingtext">Marta Castrillo</h1>
						<h2  className="landingtext">Porfolio</h2>
						<div className="landing_offices">
						<p>web developer</p>
						<p>video editor</p>
						<p>graphic design</p>
						</div>
						
				</div>
				<img className="landing-image" src={landing} alt="" />
				
				
				</div>
			</body>
    
      </div>
    );
  }

  export default Main;
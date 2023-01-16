import landing from "../images/landing.png";
function Main() {
    return (
      <div>
     
	 <body className="body">
				<div className="landing-text">
					<h3 className="landingtext">dev</h3>
					<h3 className="landingtext">video</h3>
					<h3 className="landingtext">graphic</h3>
				</div>
				<img className="landing-image" src={landing} alt="" />
			</body>
    
      </div>
    );
  }

  export default Main;
import img1 from "../images/grph 1.png";
import img2 from "../images/grph 2.png";
import img3 from "../images/grph 3.png";
import img4 from "../images/grph 4.png";
import img5 from "../images/grph 5.png";
import img6 from "../images/grph 6.png";
import img7 from "../images/grph 7.png";
import "../styles/Dev.scss";
function Dev() {
	return (
		<div className="dev_div">
			<h1 className="dev_title">dev</h1>
			<div>
				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img1} alt="" />
				</a>

				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img2} alt="" />
				</a>
				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img3} alt="" />
				</a>
				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img4} alt="" />
				</a>
			</div>
			<div>
				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img5} alt="" />
				</a>
				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img6} alt="" />
				</a>
				<a href="https://adalab.es/contacto/" title="Contacta con nosotras">
					<img className="dev_img" src={img7} alt="" />
				</a>
			
			
			</div>
     
         
       
		</div>
	);
}

export default Dev;

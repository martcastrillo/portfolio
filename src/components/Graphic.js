import "../styles/Graphic.scss";
/* import { Link } from "react-router-dom";
import datagr from "../services/data_gr.json" */
function Graphic() {
/*   const htmlData = datagr.map((project) => {

		return (
			<div className='proyect_div'>
				<Link to={project.link} className="link header">
					<img className="dev_img" src={project.img} alt="" /></Link>
			</div>
		)
	}); */
    return (
      <div className='graphic_div'>
     <h1 className="graphic_title">graphic</h1>
     <section className="section">
  <div className="box box-1"></div>
  <div className="box box-2"></div>
  <div className="box box-3"></div>
  <div className="box box-4"></div>
  <div className="box box-5"></div>
</section>
<section className="section">
  <div className="box box-6"></div>
  <div className="box box-7"></div>
  <div className="box box-8"></div>
  <div className="box box-9"></div>
  <div className="box box-10"></div>
</section>
   {/*   <div className='graphic_mini_div'>
     {htmlData}
   
      </div> */}
     
      
      </div>
    );
  }

  export default Graphic;
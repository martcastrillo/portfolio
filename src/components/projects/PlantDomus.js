import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function PlantDomus() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Plant Domus</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/plant-domus-landing-page/">    <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/c7c74cb5-cf44-410d-b3d6-715dd1881896" alt="" /></a>
      <a href="https://martscastrillo.github.io/plant-domus-landing-page/">    <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/36955d05-5cee-4265-ab99-571c22c8d6d2" alt="" /></a>
    
       <div className="project_detail">        
       <p>El proyecto es una web desarrollada con con html y css, la cual está preparada para su uso responsive.
       </p>
       <span> HTML · CSS</span>
          <span className="detail_icons">
            <a href="https://github.com/martscastrillo/plant-domus-landing-page"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/plant-domus-landing-page/"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default PlantDomus;
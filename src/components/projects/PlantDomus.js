import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function PlantDomus() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Plant Domus</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/plant-domus-landing-page/">    <img className="project_imgdes" src="https://user-images.githubusercontent.com/112553001/214275593-eca700d3-a4f6-485b-b7ab-2e1d1eaf5134.png" alt="" /></a>
      <a href="https://martscastrillo.github.io/plant-domus-landing-page/">    <img className="project_imgmov" src="https://user-images.githubusercontent.com/112553001/214275820-032513b0-d936-4c37-8977-1d14d448ce7c.png" alt="" /></a>
    
       <div className="project_detail">        
       <p>El proyecto es una web funciona básicamente con html y css. Es una web con una única página preparada para su uso responsive.



 
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
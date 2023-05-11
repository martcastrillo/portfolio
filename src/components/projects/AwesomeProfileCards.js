import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function AwesomeProfileCards() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Awesome Profile Cards</h2>
      <div className="div_project">
      <a href="https://github.com/martscastrillo/awesome-profile-cards"><img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/a25317af-6d54-4a3a-909b-f8953a8096cb" alt="" /></a>
      <a href="https://github.com/martscastrillo/awesome-profile-cards"><img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/3637dde4-39a8-49e2-95c2-d03f1723c869" alt="" /></a>
       <div className="project_detail">        
       <p>Desarrollo de una página con React que genera tarjetas de visita, donde se incluyen datos como el nombre, teléfono, correco electrónico, LinkedIn y GitHub. Se pueden elegir distintas paletas de color y se puede compartir mediante twitter la tarjeta.</p>
        <span>NODE JS · REACT</span>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/awesome-profile-cards"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/awesome-profile-cards/"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default AwesomeProfileCards;
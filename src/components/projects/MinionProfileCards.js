import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function MinionProfileCards() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Minion Profile Cards</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/minions-profile-cards/ ">   <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/a5835177-94ca-400d-82b4-6723e3ffd3b5" alt="" /> </a>
      <a href="https://martscastrillo.github.io/minions-profile-cards/ ">   <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/f63304d9-4565-4319-87a1-b96d4c10b965" alt="" /> </a>
       <div className="project_detail">     
       <p>Desarrollo de una página con JavaScript que genera tarjetas de visita, donde se incluyen datos como el nombre, teléfono, correo electrónico, LinkedIn y GitHub. Se pueden elegir distintas paletas de color y se puede compartir la tarjeta mediante twitter.</p>

       <span> HTML · CSS · JS</span>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/minions-profile-cards"><i class="fa-solid fa-code prj_logo"></i></a>
          <a href="https://martscastrillo.github.io/minions-profile-cards/ "><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default MinionProfileCards;
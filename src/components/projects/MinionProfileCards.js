import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function MinionProfileCards() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Minion Profile Cards</h2>
      <div className="div_project">
      <a href="https://martscastrillo.github.io/minions-profile-cards/ ">   <img className="project_imgdes" src="https://user-images.githubusercontent.com/112553001/214273988-e27a9efa-dcb9-4ce1-a883-577464290bcf.png" alt="" /> </a>
      <a href="https://martscastrillo.github.io/minions-profile-cards/ ">   <img className="project_imgmov" src="https://github.com/martscastrillo/minions-profile-cards/assets/112553001/73c14da6-c2a5-44ff-a660-a9b9c0884ea7" alt="" /> </a>
       <div className="project_detail">     
       <p>Desarrollo de una página con JavaScript que genera tarjetas de visita, donde se incluyen datos como el nombre, teléfono, correco electrónico, LinkedIn y GitHub. Se pueden elegir distintas paletas de color y se puede compartir mediante twitter la tarjeta.</p>

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
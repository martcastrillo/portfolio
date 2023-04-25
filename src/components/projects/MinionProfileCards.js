import "../../styles/Project.scss";
import pantalla3 from "../../images/pantallas_Capa-3.png";
import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function MinionProfileCards() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Minion Profile Cards</h2>
      <div className="div_project">
        <img className="project_img" src={pantalla3} alt="" />
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
import "../../styles/Project.scss";
import pantalla6 from "../../images/pantallas_Capa-6.png";
import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function Horoscopo() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Horóscopo</h2>
      <div className="div_project">
        <img className="project_img" src={pantalla6} alt="" />
       <div className="project_detail">       
       <p>Desarrollo de una página desarrollada en React. Se divide en tres secciones: el área de horóscopos, donde podemos acceder a la descripción,  la compatibilidad entre signos y el famoso de tu signo.</p>

       <span> HTML · CSS · REACT</span>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/horoscope "><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://martscastrillo.github.io/horoscope/ "><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default Horoscopo;
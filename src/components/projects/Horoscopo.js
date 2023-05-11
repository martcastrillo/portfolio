import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function Horoscopo() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Horóscopo</h2>
      <div className="div_project">   
         <a href="https://martscastrillo.github.io/horoscope/ ">    <img className="project_imgdes" src="https://github.com/martscastrillo/horoscope/assets/112553001/5223c495-b7d9-4199-86c0-fbb8ea09efad" alt="" /> </a>
   <a href="https://martscastrillo.github.io/horoscope/ ">    <img className="project_imgmov" src="https://github.com/martscastrillo/horoscope/assets/112553001/9e7cc15c-f7db-4caf-971c-5750521193d6" alt="" /> </a>
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
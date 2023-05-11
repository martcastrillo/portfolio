import "../../styles/Project.scss";

import { Link } from "react-router-dom";
/* import datadev from "../../services/data_pr.json"
 */
function Horoscopo() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Horóscopo</h2>
      <div className="div_project">   
         <a href="https://martscastrillo.github.io/horoscope/ ">    <img className="project_imgdes" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/42b18a6c-a6be-443e-9907-afbc40b2f9ae" alt="" /> </a>
   <a href="https://martscastrillo.github.io/horoscope/ ">    <img className="project_imgmov" src="https://github.com/martscastrillo/martscastrillo/assets/112553001/c4629745-8e74-4b58-befe-732bb93b45e5" alt="" /> </a>
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
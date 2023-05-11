import "../../styles/Project.scss";
import { Link } from "react-router-dom";
function Camera() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Happy Shop</h2>
      <div className="div_project">
      <a href="https://happy-store-5d570.web.app"> <img className="project_imgdes" src="https://user-images.githubusercontent.com/112553001/236207010-13ad21ac-bd9b-4c70-aaff-692a102175d8.png" alt="" /></a>
      <a href="https://happy-store-5d570.web.app"> <img className="project_imgmov" src="https://user-images.githubusercontent.com/112553001/236207020-596238cd-dc89-4fd2-94d8-b3508607c22f.png" alt="" /></a> 
       <div className="project_detail">  
       <p>Desarrollo de los primeros pasos de un proyecto en angular. Mediante una API se pintan los distintos elementos del stock de la tienda virtual. En desarrollo.
       </p>
       <span> HTML · CSS · ANGULAR</span>   
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/happy_shop"><i class="fa-solid fa-code prj_logo"></i></a>
            <a href="https://happy-store-5d570.web.app"><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default Camera;
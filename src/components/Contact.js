import "../styles/Contact.scss";
import contact from "../images/contact.png";
function Contact() {
    return (
      <div className='contact_div'>
     <img className="contact_img" src={contact} alt="" />
        <div className='contact_mini_div'>
        <h1 className="contact_title">contact</h1>
        <p className="text">Gracias por llegar hasta aquí. Como has podido ver, la página está en construcción, pero si quieres que colaboremos ya sabes, haz caso al mensajito de más abajo.</p>
        <ul class="icon-list">
                      <li>
                          <a class="icon" href="https://twitter.com/martscastrillo" title="¿Qué está pasando? Mira mis tweets" target="_blank" rel="noreferrer"><i
                                  class="fa-brands fa-twitter"></i></a>
                      </li>
                      <li>·</li>
                      <li>
                          <a class="icon" href="https://www.linkedin.com/in/marta-castrillo-gil" title="Aquí tienes toda mi experiencia laboral" target="_blank" rel="noreferrer"><i
                                  class="fa-brands fa-linkedin-in"></i></a>
                      </li>
                      <li>·</li>
                      <li>
                          <a class="icon" href="https://github.com/martscastrillo" title="Chequea mis repos" target="_blank" rel="noreferrer"><i
                                  class="fa-brands fa-github-alt"></i></a>
                      </li>
                      
                  </ul>
        <a href="mailto:mart.castrillo@gmail.com" title="Reel" target="_blank" rel="noreferrer" className='mailto'>
				send me an email<i className="fa-regular fa-envelope"></i></a>
			
        </div>
     
 
           
        
       </div>
    );
  }

  export default Contact;
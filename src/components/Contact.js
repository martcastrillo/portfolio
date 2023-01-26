import "../styles/Contact.scss";
import contact from "../images/contact.png";
function Contact() {
    return (
      <div class='contact_div'>
     <img className="contact_img" src={contact} alt="" />
        <div class='contact_mini_div'>
        <h1 className="contact_title">contact</h1>
        <p className="text">Gracias por llegar hasta aquí. Como has podido ver, la página está en construcción, pero si quieres que colaboremos ya sabes, haz caso al mensajito de más abajo.</p>
       
        <a href="mailto:mart.castrillo@gmail.com" title="Reel" target="_blank" rel="noreferrer" className='mailto'>
				send me an email<i class="fa-regular fa-envelope"></i></a>
			
        </div>
     
 
           
        
       </div>
    );
  }

  export default Contact;
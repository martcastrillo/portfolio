import "../styles/Contact.scss";
import contact from "../images/contact.png";
function Contact() {
    return (
      <div class='contact_div'>
     <img className="contact_img" src={contact} alt="" />
        <div class='contact_mini_div'>
        <h1 className="contact_title">contact</h1>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam vitae error exercitationem ducimus, impedit eaque mollitia similique ad facere illum qui ipsam libero reprehenderit provident laboriosam vero odio doloribus.</p>
       
        <a href="mailto:mart.castrillo@gmail.com" title="Reel" target="_blank" rel="noreferrer" className='mailto'>
				send me an email</a>
			
        </div>
     
 
           
        
       </div>
    );
  }

  export default Contact;
import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/whatsapp.png.png';
import MailIcon from '../../assets/gmail.png';
import InstagramIcon from '../../assets/github.png.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0fag01s', 'template_80l3xav', form.current, 'rQRMFOxE0UzOK6tdCUi-T')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id='contactPage'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunity. </span>
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Mahesh' name='your_name'/>
        <input type='email' className='email' placeholder='mekalamahesh1542@gmail.com' name='your_mail'/>
        <textarea className='msg' name='message' rows='5'placeholder='your message'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>
        <div className='links'>

            <a href='https:/www.linkedin.com/in/mahesh-mahi-767b46210'><img src={FacebookIcon} alt='facebook' className='link'/></a>
            <a href="https://wa.me/8919453437?text=Hello"><img src={TwitterIcon} alt='Twitter' className='link'/></a>
            <a href='mailto:mekalamahesh1542@gmail.com'><img src={MailIcon} alt='Youtube' className='link'/></a>
            <a href='https://github.com/'><img src={InstagramIcon} alt='Instagram' className='link'/></a>
        </div>
    </form>
   </section>
  )
}

export default Contact

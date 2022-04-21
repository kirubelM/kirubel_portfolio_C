import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Socials from '../Socials/Socials';
import { ThemeContext } from '../../context';




const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  //Theme Switch b/n light and dark mode
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;




  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_6hgi66b', 'template_bq4q37c', formRef.current, 'E2JhvjLHbY9-AE7Ow')
      .then((result) => {
        setDone(true);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="contact" id="contact">
      <div className="c-bg">      </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title"><strong>Want to collaborate?</strong><br></br> Contact me and let's start building</h1>
          <Socials />
        </div>
        <div className="c-right">
          <h3 className="c-desc">
            Leave a message below!
          </h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-info">
              <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} className="c-name" type="text" placeholder='Name' name='user_name' />
              <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} className="c-email" type="text" placeholder='E-mail' name='user_email' />
            </div>
            <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} rows="6" placeholder="Message" name='message' />
            <button >Submit</button>
            <div>
              {done && "Email sent!"}
            </div>
          </form>

        </div>
      </div>
    </div >
  );
}

export default Contact;
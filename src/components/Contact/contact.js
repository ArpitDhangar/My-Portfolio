import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form:', form.current);


    if (!form.current) {
      console.error('Form reference is invalid.');
      return;
    }

    emailjs.sendForm('service_k3pwfvi', 'template_sltwxia', form.current, 'x4OsyjplpfH6gage1')
      .then((result) => {
        console.log('Success:', result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.error('Error:', error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id='contacts'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className="name" placeholder='Your Name' name='your_name' required />
                <input type='email' className="email" placeholder='Your email' name='your_email' required />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
                <button type='submit' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon} alt='Twitter' className='link'/>
                    <img src={YoutubeIcon} alt='Youtube' className='link'/>
                    <img src={InstagramIcon} alt='Instagram' className='link'/>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;

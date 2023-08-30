import React from 'react';
import './intro.css';
import bg from '../../assets/image-1.png';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'> Hello,</span>
            <span className='introText'>I'm <span className='introName'>Arpit</span> <br/> Web Developer</span>
            <p className='introPara'> I am a Skilled web Developer with experience in creating <br/> visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        {/*  image size = height: 1600 px width: 1126 px */}
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro

import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I'm Arpit Dhangar, a passionate front-end developer with a strong focus on creating dynamic and user-friendly web experiences. My expertise lies in harnessing the power of ReactJS, HTML, CSS, and JavaScript to craft engaging websites and web applications.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>Transforming ideas into seamless, user-centric digital experiences through innovative UI/UX design.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>WebDesign</h2>
            <p>Crafting visually stunning and responsive websites that captivate users and drive engagement..</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>AppDesign</h2>
            <p>Designing intuitive and visually captivating mobile apps that provide seamless user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

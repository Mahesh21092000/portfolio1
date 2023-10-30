import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

function Skill() {
  return (
    <div>
        <section id='skills'>
            <span className='skillTitle'>About</span>
            <span className='skillDesc'>i am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. i have a strong understanding of design and a keen eye for detail. i am proficient in HTML , CSS and JAVASCRIPT,as well as design softwere such as Adobe Photoshop and illustrator</span>
           <div className='skillBars'>
            <div className='skillbar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Frontend Developer</h2>
                    <p>I'm a frontend developer with experience in building responsive
              and optimised site</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={WebDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Developer</h2>
                    <p>I have knowledge on developing fast and optimised back end systems
              and APIs</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={AppDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI design</h2>
                    <p>I have designed multiple landing pages and i have created design systems as well....</p>
                </div>
            </div>

           </div>

        </section>
      
    </div>
  )
}

export default Skill;

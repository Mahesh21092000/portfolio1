import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/skills/html.png';
import Portfolio2 from '../../assets/skills/css.png';
import Portfolio3 from '../../assets/skills/javascript.png';
import Portfolio4 from '../../assets/skills/mongodb.png';
import Portfolio5 from '../../assets/skills/react.png';
import Portfolio6 from '../../assets/skills/node.png';


const works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Skills</h2>
        <span className='worksDesc'>I took pride in paying attention to the smallest details and making sure that my work is pixel perfect . i am excited to bring my skills and experience to help businesses achive their goals and create a strong online presence</span>
        <div className='workImgs'>
            <img src={Portfolio1} alt='Html' className='workImg'/>
            <img src={Portfolio2} alt='' className='workImg'/>
            <img src={Portfolio3} alt='' className='workImg'/>
            <img src={Portfolio4} alt='' className='workImg'/>
            <img src={Portfolio5} alt='' className='workImg'/>
            <img src={Portfolio6} alt='' className='workImg'/>
        </div>
        <button className='workBtn'>See More</button>
      
    </section>
  )
}

export default works;

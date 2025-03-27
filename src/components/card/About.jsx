import React, {useState} from 'react'
import './About.css'

function About() {
  
  const [isFlipped, setIsFlipped]= useState(false);

  const handleFlip=()=>{
    setIsFlipped(!isFlipped);
  }

    const about = `I am Maria Vassilikopoulou, a passionate and enthusiastic frontend developer. I’m currently sharpening my skills in React, HTML, CSS, JavaScript, and various frontend frameworks. At the same time, I am gaining knowledge in .NET Cloud Development, focusing on Microsoft Azure cloud, Azure DevOps, and database management.

I have a strong foundation in software development and a keen desire for continuous learning. My education has equipped me with a wide range of skills, including proficiency in C#, SQL, React, TypeScript, and tools such as Git and Docker. I also have experience in agile methodologies, UX/UI design, and cloud architecture, making me adaptable to dynamic and collaborative environments. I am also self-learning Python and Java.

I have successfully developed dynamic web applications, managed databases, and created interactive interfaces. Some of my notable projects include an e-wallet system, a personal portfolio website, and a library management system.

Fluent in Swedish and English, with Greek as my mother tongue, I bring a multicultural perspective to my work. Outside of my academic and professional pursuits, I enjoy programming, exploring new technologies, contributing to open-source projects, working out, traveling, and spending time with friends.

I'm eager to grow my skills in the tech industry and look forward to the opportunities ahead. `;
  return (
    
<div className={ `card ${isFlipped ? 'flip' : ''}`} onClick={handleFlip}>
    
    <div className='card-front'>
    <h2 className='icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" >
          <path fill="currentColor" d="M12 4V1L8 5l4 4V6c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5H5c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/>
        </svg>
            About Me</h2>
    </div>
    <div className='card-back'>
    <p className='card-text'>{about}</p>

   
    </div>
    </div>
  );}

export default About
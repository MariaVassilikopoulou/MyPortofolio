import {useState} from 'react'
import './About.css'

function About() {
  
  const [isFlipped, setIsFlipped]= useState(false);

  const handleFlip=()=>{
    setIsFlipped(!isFlipped);
  }

 // const paragraphs = about.split('\n\n');

    const about =[ `Hi, I’m Maria Vassilikopoulou — a curious and motivated developer with a growing love for building web applications that are both useful and enjoyable to use. I'm currently focusing on full-stack development and cloud technologies, and I especially enjoy working with modern frontend tools like React, TypeScript, and Next.js, while also diving deeper into backend development and cloud services like Azure.

I started my journey with languages like C#, SQL, and JavaScript, and over time, I’ve picked up experience working with .NET, Docker, and DevOps tools like CI/CD pipelines and infrastructure-as-code using Terraform and Bicep. I’m also learning how to build clean APIs with ASP.NET Core and manage data with both relational and NoSQL databases like MongoDB and CosmosDB.

Some of my favorite projects so far include building a Next.js app, creating reusable components with SCSS and Zustand, and setting up backend systems to work smoothly with frontend features. I really enjoy learning by doing — experimenting, debugging, and finding better ways to solve problems.

Outside of coding, I speak Swedish, English, and Greek, and I love combining my passion for tech with my interest in different cultures, travel, and staying active. I’m always open to new challenges, collaborative projects, or just connecting with other developers.

Thanks for stopping by — feel free to reach out or check out what I’ve been working on! `];
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
    {about.map((paragraph, index) => (
    <p key={index} className='card-text'>{paragraph}</p>
  ))}


   
    </div>
    </div>
  );}

export default About
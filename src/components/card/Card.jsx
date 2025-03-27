import React, {useState} from 'react'
import '../card/Card.css'
import '../main/Main.css'

function Card() {


function handleSkills(event){
  setSkills(event.target.value);
}

  const skills = [
    { name: 'React', details: 'Developed a portfolio and e-wallet system using React, incorporating react-router and Redux for state management.' },
{ name: 'Azure', details: 'Deployed web applications like a game store webpage with CRUD operations on Microsoft Azure.' },
{ name: 'Azure DevOps', details: 'Managed repositories and implemented CI/CD pipelines for web applications.' },
{ name: 'TypeScript', details: 'Built a memory game exercise to practice TypeScript fundamentals.' },
{ name: 'JavaScript', details: 'Created dynamic web pages, including movie search and e-commerce functionality for a cheesecake shop.' },
{ name: 'HTML', details: 'Structured web pages using HTML, such as designing a hotel page layout.' },
{ name: 'CSS', details: 'Designed responsive web pages using CSS and Bootstrap.' },
{ name: 'Node.js', details: 'Utilized Node.js as a server-side JavaScript runtime environment across various projects.' },
{ name: 'Express', details: 'Developed APIs using Express, a web application framework for Node.js.' },
{ name: 'Figma', details: 'Designed and prototyped web app interfaces and layouts using Figma.' },
{ name: 'C#', details: 'Developed web applications and database communications using .NET and C#.' },
{ name: '.NET', details: 'Utilized .NET framework for building Windows applications and web services.' },
{ name: 'Entity Framework', details: 'Implemented Entity Framework for .NET to facilitate object-relational mapping and database migrations.' },
{ name: 'SQL Server', details: 'Designed and managed databases with large datasets using SQL Server.' },
{ name: 'MongoDB', details: 'Utilized MongoDB, a NoSQL database, for applications with smaller datasets and JSON-like documents.' },
{ name: 'Cosmos DB', details: 'Deployed globally distributed, multi-model database services within Microsoft Azure.' },
{ name: 'Git', details: 'Implemented Git for version control across multiple projects, tracking changes in source code.' },
{ name: 'Agile', details: 'Participated in Agile project management methodologies, including Scrum, for iterative software development.' },
{ name: 'UX/UI Design', details: 'Iteratively improved user interface designs to enhance user experience and usability.' },
{ name: 'Docker', details: 'Created Docker images and defined Dockerfiles and Docker Compose configurations for .NET Core applications.' },
{ name: 'APIs', details: 'Developed web applications that utilize APIs for efficient data exchange in JSON format.' },
{ name: '.NET Core', details: 'Utilized .NET Core framework for building scalable and cross-platform applications.' },
{ name: 'Java', details: 'Explored Java independently to understand object-oriented programming principles similar to C#.' },
{ name: 'Python', details: 'Began my programming journey with Python, which sparked my passion and motivated me to explore more in programming.' },


  ];

  /*const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
/*onClick={() => handleClick(index)}}*/

  return (
   
    <div className="skills-container">
    <h3>Below are some of my skills.</h3>
    <h3>Feel free to explore and interact with them to see additional details!</h3>
    {skills.map((skill, index) => (
      <div key={index} className="skill-badge">    
        <div className="skill-name">{skill.name}</div>
        <div className="skill-details">{skill.details}</div>
      </div>
    ))}
  </div>
);
  }

export default Card
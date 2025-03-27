import React from 'react';
import { Link } from 'react-router-dom';
import './CV.css';

function CV() {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1>Maria Vassilikopoulou</h1>
        <p>0769176037 – vasilikopouloumaria@gmail.com</p>
      </div>

      <div className="cv-section">
        <h2>ABOUT ME</h2>
        <p>
        <strong>Frontend developer</strong> student at Jensen YH, expanding skills in React, HTML, CSS, JavaScript, and
          Frontend frameworks. Also pursuing <strong>.NET Cloud Developer </strong> studies at IT-Högskolan, focusing on
          Microsoft Azure cloud, Azure DevOps, database management, and user-friendly interfaces.
          Actively seeking job opportunities to enhance skills and engage in practical development projects.
        </p>
      </div>

      <div className="cv-section">
        <h2>EDUCATION</h2>
        <h3>Frontend Developer Student, JENSEN (Yrkeshögskolan) 2023 – ongoing</h3>
        <ul>
          <li>JavaScript: Developed dynamic web pages for improved user experience and reactive functionality.</li>
          <li>React: Ongoing studies and high motivation to apply the knowledge in practice.</li>
          <li>CSS: Designed web pages, with responsive design for all devices, Bootstrap, including a three-part homepage.</li>
          <li>HTML: Created the structure of web pages with HTML elements and improved visual presentation.</li>
          <li>API (Application Programming Interface): Communication between applications with JSON. Created web applications to fetch and send data.</li>
          <li>Node.js and Express: Fundamental understanding of server-side JavaScript with Node.js.</li>
          <li>Figma: Skilled in Figma for collaborative design, wireframing, and prototyping.</li>
          <li>Agile Project Methodology and Testing, UX/UI, Packaging, Delivery, and Follow-up.</li>
        </ul>
        <h3>.NET Cloud Developer Student, ITHS (Yrkeshögskolan) 2023 – ongoing</h3>
        <ul>
          <li>C# and .NET: Implemented problem-solving oriented programming, developed interactive .NET applications.</li>
          <li>Entity Framework: Experience in Code First and Database First, designed and implemented database models in Blazor application for a bookstore.</li>
          <li>GUI: Created interactive interfaces, including a quiz game with the ability to play, edit, and create new quizzes saved as JSON files.</li>
          <li>Node.js and Express: Developed server-based applications with Node.js and Express.</li>
          <li>Azure and AzureDevops: Hosted the database in Azure for a CRUD application with cloud-based database management.</li>
          <li>Database Management: Experience with SQL Server, MongoDB, Cosmos DB, SQL Server Management Studio, including the use of stored procedures, relational databases, and SQL/NoSQL query languages like Firebase.</li>
          <li>Agile Methods, Cloud Publishing and Distribution, Docker, Cloud Architecture.</li>
        </ul>
        <h3>Göteborg Universitet & Hermods 2020 – 2022</h3>
        <ul>
          <li>English in Plain Language, Leadership and Organization, Communication in the Workplace, Programming 1 (C#), Programming 2 (C#).</li>
        </ul>
        <h3>University of West Attica: Bachelor program 2005 – 2010</h3>
        <ul>
          <li>Economics, Marketing, and Consumption: Focus on consumer behavior, global sustainable consumption, and marketing.</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2>SELF-TAUGHT SKILLS</h2>
        <ul>
          <li>Basic Python</li>
          <li>Git, Github, and Version Control</li>
          <li>Basic Java</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <h3>SALES (Athens, Greece, 2009-2022)</h3>
        <p>Responsible for economic planning, sales, and customer advice at Lidl Sweden in Gothenburg. Previous experience includes similar responsibilities and advice for the stores Brooks Brothers and Betty Barclay.</p>
        <h3>OLYMPIC AIRLINES (Athens, Greece, 2005-2009)</h3>
        <p>Head hostess with focus on passenger safety and service.</p>
      </div>

      <div className="cv-section">
        <h2>LANGUAGE SKILLS</h2>
        <ul>
          <li>Swedish Fluent</li>
          <li>English Fluent</li>
          <li>Greek Mother Tongue</li>
        </ul>
      </div>
      <Link to='/' className='back-to-home-button1'>Back to Home</Link>
    </div>
  );
}

export default CV;

import { Link } from 'react-router-dom';
import './CV.css';

function CV() {
  return (
    <div className="cv-container">
        <div className="cv-header">
            <h1>Maria Vassilikopoulou</h1>
            <p><strong>JUNIOR FULLSTACK DEVELOPER</strong></p>
            <p>0769176037 – vasilikopouloumaria@gmail.com</p>
        </div>
        <div className="cv-section">
            <h2>INTERNSHIP</h2>
            <h3>Junior Frontend Developer (LIA1 & LIA2) | Nov 2024 - Present</h3>
            <p>NEXER Group</p>
            <ul>
                <li>Developed a Next.js application focusing on code structure, design, and the use of TypeScript.</li>
                <li>Created reusable components with SCSS and Zustand, improving scalability and code quality.</li>
                <li>Used Figma to design user interfaces and implemented best practices to deliver a well-structured product.</li>
                <li>Ensured consistency and reusability by managing types and modular blocks in TypeScript.</li>
            </ul>
            <h3>Junior Backend & Cloud Developer (LIA 2) | Jan 2025 - Present</h3>
            <p>NEXER Group</p>
            <ul>
                <li>Built and implemented a complete infrastructure in Azure, automating deployment processes with CI/CD, YAML, and Terraform.</li>
                <li>Utilized .NET and cloud services to optimize the development process and ensure scalability.</li>
                <li>Managed NoSQL data storage with MongoDB and CosmosDB for efficient backend-frontend communication.</li>
                <li>Created and integrated APIs with ASP.NET Core Web API for efficient data management.</li>
            </ul>
            <h3>Junior Backend & Cloud Developer (LIA1) | Sep 2024 - Nov 2024 (3 mån)</h3>
            <p>NEXER Group</p>
            <ul>
                <li>Worked with Azure services like App Services, Storage Accounts, Cosmos DB, and Service Bus.</li>
                <li>Managed CI/CD pipelines in Azure DevOps, configured YAML, and developed Bicep templates for infrastructure automation.</li>
                <li>Developed and maintained APIs in .NET, implemented Dependency Injection, and built microservices.</li>
            </ul>
        </div>
        <div className="cv-section">
            <h2>EDUCATION</h2>
            <h3>Frontend Developer Student | JENSEN Yrkeshögskola | 2023 – ongoing</h3>
            <ul>
                <li>JavaScript, CSS, HTML, React, TypeScript</li>
                <li>Figma, Agil metodik, UX/UI, Testning</li>
            </ul>
            <h3>.NET Cloud Developer Student | ITHS Yrkeshögskola | 2023 – ongoing</h3>
            <ul>
                <li>C#, .NET, Entity Framework, SQL, NoSQL (MongoDB, CosmosDB)</li>
                <li>Azure, Terraform, Docker</li>
                <li>Cloud publishing and distribution, Cloud & security solutions</li>
            </ul>
            <h3>Göteborgs Universitet & Hermods | 2020 – 2022</h3>
            <ul>
                <li>English, Leadership, Communication, Programming 1 & 2 (C#)</li>
            </ul>
            <h3>University of West Attica | 2005 – 2010</h3>
            <ul>
                <li>Economics, Marketing & Consumption, Focus on consumer behavior and sustainable consumption</li>
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

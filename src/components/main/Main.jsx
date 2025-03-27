import React, {useEffect} from 'react'
import './Main.css'
import Card from '../card/Card';
import About from '../card/About';
import Footer from '../Footer';
import { useLocation, Link } from 'react-router-dom';


function Main() {

const location= useLocation();


useEffect(()=>{
  const scrollToSection = () => {
    const theSection = location.hash;
    if (theSection) {
      const sectionId = theSection.substring(1); 
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth'  });
      }
    } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

   scrollToSection();
}, [location]);
 
return (
    <div className= 'main-container'>
     <Link to='/' className='back-to-home-button'>Back to Home</Link>
      <Link to="/cv">
                <button className='cv'>View CV</button>
       </Link>
  <div className='content'>
<section id='about'>  
<About />
</section> 
   </div>
   {/*<div  className='cards-container'>
      {skills.map((skill, index) => (
        <Card key={index} title={skill.title} details={skill.details} />
      ))}
      </div>*/}
      <section id='card'><Card /></section>

      <section id="contact">
        <Footer />
      </section>
      <Link to='/' className='back-to-home-button'>Back to Home</Link>
    </div>
   
  
  ); 
}

export default Main
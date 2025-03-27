import React from 'react'

function Footer() {
  return(
<footer className='footer'>
<p>&copy;{new Date().getFullYear()}</p>
<a href="https://www.linkedin.com/in/maria-vassilikopoulou-ba0a58223/" target="_blank" rel="noopener noreferrer">
      <img src="./src/assets/linkedin_.png" alt="LinkedIn profile" />
    </a>
    <a className='githubimg' href="https://github.com/MariaVassilikopoulou/" target="_blank" rel="noopener noreferrer">
      <img src="./src/assets/github-mark.png" alt="Github profile" />
    </a>

{/*<img src="./src/assets/email.png" alt='email'></img>*/}
<p>MAIL: vasilikopouloumaria@gmai.com</p>

{/*<img src="./src/assets/telephone_.png" alt='email'></img>*/}
<p>MOBILE PHONE: +46769176037</p>


</footer>);
}

export default Footer
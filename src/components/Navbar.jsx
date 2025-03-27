import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div
    className='navbar'>
                
                <Link to="/main#about">About</Link>
                <Link className="contact-link" to= '/main#contact'>Contact</Link>
              
          </div>
  )
}

export default Navbar
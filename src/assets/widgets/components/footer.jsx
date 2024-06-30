import React from 'react'
import '../styles/footer.css'


export const Footer = () => {
  return (
    <div className="footer-content">
        <div className="text">
            <span>Created With <span className='heart'>❤</span> for <i>A</i></span>
        </div>
        <div className="redes">
            <div className="red-container">
            <a href="" className='red-social'><i class='bx bxl-twitter'></i></a>
            </div>
            <div className="red-container">
            <a href="" className='red-social'><i class='bx bxl-instagram-alt'></i></a>
            </div>
            <div className="red-container">
            <a href="" className='red-social'><i class='bx bxl-facebook' ></i></a>
            </div>
        </div>
    </div>
  )
}


export default Footer
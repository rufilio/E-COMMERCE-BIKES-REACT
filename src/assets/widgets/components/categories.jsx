import React from 'react'
import '../styles/categories.css'
import {Link} from 'react-router-dom'


export const Categories = () => {
  return (
    <div className='card-categoris'>
    <div className="categoris-content categoris-show">
        <div className="tile">
            <h1><Link to="/Accesories">Accessories</Link></h1>
        </div>
    </div>
    <div className="categoris-content categoris-show-2">
        <div className="tile">
        <h1><Link to="/Models">Models</Link></h1>
        </div>
    </div>
    <div className="categoris-content categoris-show-3">
        <div className="tile">
        <h1><Link to="/Apparel">Apparel</Link></h1>
        </div>
    </div>
    </div>
  )
}
export default Categories


import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../../data/toCapital'
import '../styles/item.css'

const Item = ( {accesorios} ) => {





  
  return (
    <div className="producto">
       <div className="images">
       <img src={accesorios.imagen} alt={accesorios.titulo} />
       </div>
       <div className="tag">
         <p>{toCapital(accesorios.categoria)}</p>
       </div>
        <div className='content-text'>
           <div className="text">
              <span>{accesorios.titulo}</span>
              <p>{accesorios.precio}</p>
           </div>
            <div className="button">
            <Link className="ver-mas" to={`/Accesories/${accesorios.id}`}>Ver más</Link>
            </div>
        </div>
    </div>
  )
}

export default Item
import React from 'react'
import '../styles/itemcount.css'


const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <div className="butto-add-cart">
          <button className="agregar-al-carrito" onClick={handleAgregar}>Add Cart</button>
        </div>
    </div>
  )
}

export default ItemCount
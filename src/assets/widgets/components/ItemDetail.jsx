import { useContext, useState } from "react";
import { toCapital } from '../../data/toCapital';
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";
import '../styles/detail.css'

const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container">
        <div className="producto-detalle">
            <div className="images">
              <img src={item.imagen} alt={item.titulo} />
            </div>
            <div className="producto-content-text">
                <div className="tile">
                  <h3 className="titulo">{item.titulo}</h3>
                </div>
                <div className="description">
                  <p className="descripcion">{item.descripcion}</p>
                </div>
                <div className="precio">
                  <p className="precio">{item.precio}</p>
                </div>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
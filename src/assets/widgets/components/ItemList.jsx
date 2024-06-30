import  Item  from "./item";
import { toCapital } from '../../data/toCapital';
import '../../../App.css'

const ItemList = ( {accesorios, titulo} ) => {

    const textoCapitalizado = toCapital(titulo)

  return (
    <div className="container">
        <h2 className="main-title">{textoCapitalizado}</h2>

        <div className="productos">
        {Array.isArray(accesorios) && accesorios.length > 0 ? (
      accesorios.map((prod) => (
        <Item accesorios={prod} key={prod.id} />
      ))
    ) : (
      <p>No hay accesorios disponibles</p>
    )}
        </div>
    </div>
  )
}

export default ItemList
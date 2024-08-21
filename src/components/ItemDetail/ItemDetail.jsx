import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.imagen} alt={product.nombre}/>
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p>U$S {product.precio}</p>
        <p>Stock: {product.stock}</p>
        <p>Marca: {product.categoria}</p>

        <ItemCount initial={1} stock={product.stock}/>

    </div>
  )
}

export default ItemDetail
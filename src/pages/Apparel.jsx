import React from 'react'
import { useEffect, useState } from "react";
import ItemList from "../assets/widgets/components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../assets/firebase/config";



export const Apparel = () => {

  const [accesorios, setAccesorios] = useState([]);

  const [titulo, setTitulo] = useState("apparel");

  const categoria = useParams().categoria;

  useEffect(() => {

    const accesoriosRef = collection(db, "apparel");
    const q = categoria ? query(accesoriosRef, where("categoria", "==", categoria)) : accesoriosRef;

    getDocs(q)
      .then((resp) => {

        setAccesorios(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
      
  }, [categoria])
  


  return (
    <div className="Accesorios">
    <ItemList accesorios={accesorios} titulo={titulo} />
    </div>
  )
}


export default Apparel
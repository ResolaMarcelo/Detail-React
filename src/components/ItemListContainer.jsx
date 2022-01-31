import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Productos from "../productos.json"

export default function ItemListContainer(props) {
  function onAdd() {
    console.log("Item added");
  }

 
  const [itemList, setItemList] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((res) => {
      setItemList(res);
    });
  }, []);

  return (
    <>
      <ItemList itemList={itemList} />
    </>
  );
}
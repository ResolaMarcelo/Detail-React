import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import  {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import ItemDetail from './components/Detail/ItemDetail';

function App() {
  return (
    <div className="App">
      
      <>
        <BrowserRouter>
        <NavBar></NavBar>
          <Switch>

            {/* ruta home */}
            <Route exact path="/home">
           
      <ItemListContainer />
      <ItemDetailContainer />
            </Route>

            {/* ruta contacto */}
            <Route exact path="/contacto">
              Estas en contacto
            </Route>

            {/* ruta carrito */}
            <Route exact path="/carrito">
              listo para comprar
            </Route>

          </Switch>
         
        </BrowserRouter>
      </>
      
      

    </div>
  );
}

export default App;

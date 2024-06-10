import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../components/Home";
import NavPage from "../components/NavPage";
import InfoCapinha from "../components/InfoCapinhas";
import Carrinho from "../components/Carrinho";
import PageCapinhas from "../components/PageCapinhas";
import FinalizarCompra from "../components/PageFinalizarCompra";
import PageCarregador from "../components/PageCarregadores";


function RoutsPage(){

    return(
       <BrowserRouter>
       <NavPage/>

            <Routes>
                <Route  path="/" element={ <HomePage/> }/>
                <Route path="/infoCapinha" element={ <InfoCapinha/> } />
                <Route path="/favoritos" element={ <Carrinho/> } />
                <Route path="/capinhas" element={ <PageCapinhas/> } />
                <Route path="/carregadores" element={ <PageCarregador/> } />
                <Route path="/finalizarCompra" element={ <FinalizarCompra/> } />

            </Routes>

       </BrowserRouter>
        
    )
}

export default RoutsPage;
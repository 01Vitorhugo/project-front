import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../components/Home";
import NavPage from "../components/NavPage";
import PageLogin from "../components/Login";
import PageCadastro from "../components/Register";
import InfoCapinha from "../components/InfoCapinhas";
import Carrinho from "../components/Carrinho";
import PageCapinhas from "../components/PageCapinhas";


function RoutsPage(){

    return(
       <BrowserRouter>
       <NavPage/>

            <Routes>
                <Route  path="/" element={ <HomePage/> }/>
                <Route  path="/login" element={ <PageLogin/> }/>
                <Route  path="/cadastro" element={ <PageCadastro/> }/>
                <Route path="/infoCapinha" element={ <InfoCapinha/> } />
                <Route path="/favoritos" element={ <Carrinho/> } />
                <Route path="/capinhas" element={ <PageCapinhas/> } />

            </Routes>

       </BrowserRouter>
        
    )
}

export default RoutsPage;
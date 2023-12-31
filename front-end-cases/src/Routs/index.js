
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../components/Home";
import NavPage from "../components/NavPage";
import PageLogin from "../components/Login";
import PageCadastro from "../components/Register";
import InfoCapinha from "../components/InfoCapinhas";

function RoutsPage(){

    return(
       <BrowserRouter>
       <NavPage/>

            <Routes>
                <Route  path="/" element={ <HomePage/> }/>
                <Route  path="/login" element={ <PageLogin/> }/>
                <Route  path="/cadastro" element={ <PageCadastro/> }/>
                <Route path="/infoCapinha" element={ <InfoCapinha/> } />
            </Routes>

       </BrowserRouter>
        
    )
}

export default RoutsPage;
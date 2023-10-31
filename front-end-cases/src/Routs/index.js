
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../components/Home";
import NavPage from "../components/NavPage";
import PageLogin from "../components/Login";
import PageCadastro from "../components/Register";

function RoutsPage(){

    return(
       <BrowserRouter>
       <NavPage/>

            <Routes>
                <Route  path="/home" element={ <HomePage/> }/>
                <Route  path="/login" element={ <PageLogin/> }/>
                <Route  path="/cadastro" element={ <PageCadastro/> }/>
            </Routes>

       </BrowserRouter>
        
    )
}

export default RoutsPage;
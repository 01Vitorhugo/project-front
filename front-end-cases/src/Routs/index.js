
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
                <Route  path="/" element={ <HomePage/> }/>
                <Route  path="/login" element={ <PageLogin/> }/>
                <Route  path="/cadastro" element={ <PageCadastro/> }/>
            </Routes>
            
            // Criar routs privada para nao dar interferencia quando o usuario estiver logado

       </BrowserRouter>
        
    )
}

export default RoutsPage;
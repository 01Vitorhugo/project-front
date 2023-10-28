
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../components/Home";
import NavPage from "../components/NavPage";
import PageLogin from "../components/Login";

function RoutsPage(){

    return(
       <BrowserRouter>
       <NavPage/>

            <Routes>
                <Route  path="/" element={ <HomePage/> }/>
                <Route  path="/login" element={ <PageLogin/> }/>
            </Routes>

       </BrowserRouter>
        
    )
}

export default RoutsPage;
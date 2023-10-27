
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../components/Home";
import NavPage from "../components/NavPage";

function RoutsPage(){

    return(
       <BrowserRouter>
       <NavPage/>

            <Routes>
                <Route  path="/" element={ <HomePage/> }/>

            </Routes>

       </BrowserRouter>
        
    )
}

export default RoutsPage;
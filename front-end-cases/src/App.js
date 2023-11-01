import StatesProvider from "./ContextApi/states";
import RoutsPage from "./Routs";
import './app.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";


function App() {

  return (
    <StatesProvider>
      <div className="App">
        <ToastContainer autoClose={3000} />
        <RoutsPage />
        <div className="whats">
          <a href="https://wa.me/11995216604"> <img src={require('./Imagens/logo-whats-branco.png')} alt="logo-whats" /></a>
        </div>
<<<<<<< HEAD
      
=======
        <Footer/>
>>>>>>> 54827c5b26c607bed4f8aa1122c7e4b17a91c9d6
      </div>
    </StatesProvider>
  );
}

export default App;

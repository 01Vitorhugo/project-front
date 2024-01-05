import StatesProvider from "./ContextApi/states";
import RoutsPage from "./Routs";
import './app.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useState } from "react";
import { animateScroll as scroll } from 'react-scroll';

function App() {

  const [setaScroll, setSetaScrollY] = useState(0);


  function getScroll(){
    setSetaScrollY(window.scrollY);
  }
  window.addEventListener('scroll', getScroll);

  function GoTop(){
    scroll.scrollToTop();
  }



  return (
    <StatesProvider>
      <div className="App">
        <ToastContainer autoClose={3000} />
        <RoutsPage />

        <div className="whats">
          <a href="https://wa.me/11995216604"><i className="fab fa-whatsapp"></i></a>
        </div>

         {setaScroll > 180 && 
          <div className="scroll">
           <button onClick={GoTop}><i class="fa-solid fa-chevron-up"></i></button>
          </div>
         } 
        {/* <Footer/> */}
        
      </div>
    </StatesProvider>
  );
}

export default App;

import StatesProvider from "./ContextApi/states";
import RoutsPage from "./Routs";
import './app.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useState, useContext } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { StateContext } from "./ContextApi/states";

function App() {

  const [setaScroll, setSetaScrollY] = useState(0);

  const { fav } = useContext(StateContext);
  const [contador, setContador] = useState([]);

  contador.push(fav);
  
  // if(fav ==! ''){
  //   setContador.push(fav);
  // }
  console.log(contador, 'Contador');








  function getScroll() {
    setSetaScrollY(window.scrollY);
  }
  window.addEventListener('scroll', getScroll);

  function GoTop() {
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

        <div className='carrinho'>
          <h1>{contador.length}</h1>

          <i class="fa fa-cart-shopping"></i>
        </div>


        {setaScroll > 180 &&
          <div className="scroll">
            <button onClick={GoTop}><i class="fa-solid fa-chevron-up"></i></button>
          </div>
        }


      </div>
    </StatesProvider>
  );
}

export default App;

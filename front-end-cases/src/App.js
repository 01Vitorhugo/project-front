import RoutsPage from "./Routs";
import './app.css';


function App() {
 
  return (
    <div className="App">
      <RoutsPage/>

      <div className="whats">
       <a href="https://wa.me/11995216604"> <img src={require('./Imagens/logo-whats-branco.png')} alt="logo-whats"/></a>

      </div>

    </div>
  );
}

export default App;

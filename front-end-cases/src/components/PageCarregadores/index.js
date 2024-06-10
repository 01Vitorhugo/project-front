import './pageCarregador.css';
import { StateContext } from '../../ContextApi/states';
import { useContext } from 'react';


export default function PageCarregador(){

    const { apiCarregador, compra, setCompra} = useContext(StateContext);



    function Compra(item) {

        setCompra(true);

        let objCompra = item;
        localStorage.setItem("itemCompra", JSON.stringify(objCompra));

        if (compra === true ) {
            window.location.href = "/finalizarCompra";


        } 



    }


    return(

        <div className='PageCarregador'>
           
           <main>
                {apiCarregador.map((item) => {
                    return (

                        <div className='itemCarregador' key={item.id}>
                            <p>{item.modelo}</p>
                            <img src={item.img} alt='imagem capinhas' />
                            <h1>{item.valor} reais</h1>

                            <button onClick={() => Compra(item)}>Comprar</button>
                        </div>
                    )
                })}
            </main>

        </div>
    )
}
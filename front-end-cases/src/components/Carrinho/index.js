import React from "react";
import { useEffect, useState, useContext } from 'react';
import './carrinho.css'
import { toast } from "react-toastify";
import { StateContext } from '../../ContextApi/states';


function Carrinho() {

    const { log, compra, setCompra } = useContext(StateContext);

    const [pushItem, setPushItem] = useState([]);

    

    useEffect(() => {
        
        Atualizar();
    }, [])

    function Atualizar() {

        const item = localStorage.getItem("favoritos")
        var itemConvertido = JSON.parse(item)

        setPushItem(itemConvertido);

    }

    function excluir(item) {

        let i = pushItem.findIndex((p) => {
            return p.id === item.id;
        });

        pushItem.splice(i, 1);

        localStorage.setItem("favoritos", JSON.stringify(pushItem));

        Atualizar();

        toast.success("Excluido com sucesso");

    }

    function Compra(item) {
        setCompra(true);

        let objCompra = item;
        localStorage.setItem("itemCompra", JSON.stringify(objCompra));
       
        if (compra === true && log === true) {   
            window.location.href = "/finalizarCompra";
            

        }else if(compra === false && log === false) {
            window.location.href = "/login";
            
        }

    }




    return (

        <div className='boxFavoritos'>
            <h1>Você tem <span>{pushItem.length} itens</span> salvos !</h1>

            {
                pushItem === ' ' ? <p>Nenhum item</p> : pushItem.map((item) =>

                (
                    <div className='itemLocal' key={item.id}>
                        <h1>Id do protudo {item.id}</h1>
                        <p id='pag'>{item.modelo}</p>

                        <div className='imgLocal'>
                            <img src={item.img} alt='Imagem do produto salvo' />
                        </div>

                        <h2>{item.valor} Reais</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => excluir(item)}>
                            <i class="fa-solid fa-trash-can"></i>
                        </button>

                        <section>
                            <button onClick={() => Compra(item)}>Comprar</button>
                        </section>

                    </div>
                )

                )
            }

        </div>
    )


}

export default Carrinho;
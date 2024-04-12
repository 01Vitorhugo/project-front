import React from "react";
import { StateContext } from '../../ContextApi/states';
import { useContext, useState } from 'react';
import './pageCapinhas.css';

export default function PageCapinhas() {

    const { capinhas, compra, setCompra, log } = useContext(StateContext);
    const [pesquisa, setPesquisa] = useState('');

    const elemento = capinhas.filter((item) => item.modelo === pesquisa)

    function chegarLetras() {

        if (pesquisa !== '') {
            const letras = pesquisa;
            setPesquisa(letras[0].toUpperCase() + letras.substring(1));
        } else if (pesquisa === '') {
            setPesquisa('')
        }

    }

    function Compra(item) {

        setCompra(true);

        let objCompra = item;
        localStorage.setItem("itemCompra", JSON.stringify(objCompra));

        if (compra === true && log === true) {
            window.location.href = "/finalizarCompra";


        } else if (compra === false && log === false) {
            window.location.href = "/login";

        }



    }


    return (
        <div className='capinhas'>

            <section>
                <input type='text'
                    placeholder='Pesquisar'
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    onBlur={chegarLetras}
                />

                {pesquisa !== '' && <p>Itens Encontrados {elemento.length}</p>}
            </section>



            <div className='itemPesquisa'>
                {elemento.map((item) => {
                    return (
                        <article key={item.id}>
                            <p>{item.modelo}</p>
                            <img src={item.img} alt='imagem capinhas' />
                            <h2>{item.valor} Reais</h2>
                            <button onClick={() => Compra(item)}>Comprar</button>
                        </article>
                    )
                })}

            </div>

            <main>
                {capinhas.map((item) => {
                    return (

                        <div className='itemCapinhas' key={item.id}>
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
import React from "react";
import { StateContext } from '../../ContextApi/states';
import { useContext, useState } from 'react';
import './pageCapinhas.css';

export default function PageCapinhas() {

    const { capinhas } = useContext(StateContext);
    const [pesquisa, setPesquisa] = useState('');

    const elemento = capinhas.filter((item) => item.modelo === pesquisa)

   

    return (
        <div className='capinhas'>

            <section>
                <input type='text'
                    placeholder='Pesquisar'
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
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
                        </div>
                    )
                })}
            </main>

        </div>


    )
}
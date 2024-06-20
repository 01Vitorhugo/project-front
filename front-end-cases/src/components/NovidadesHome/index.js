import React from "react";
import './novidades.css';
import './novidadesMediaQuery.css';
import { StateContext } from '../../ContextApi/states';
import { useContext } from 'react';
import { Link } from 'react-router-dom'


function NovidadesHome() {

    const { apiNovidade, setItemCapinhaInfo } = useContext(StateContext);

    function ItemNovidade(list) {

        setItemCapinhaInfo([list]);


    }


    return (
        <div className="novidades">
            <div className="title">
                <h1>Novidades</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path d="M2.8125 0L0 2.04545L7.5 7.5L15 2.04545L12.1875 0L7.5 3.40909L2.8125 0Z" fill="white" />
                </svg>
            </div>

            <section>
                {
                    apiNovidade.map((list) => {
                        return(
                            <div className="conteudo" key={list.id}>

                                <figure >
                                    <img src={list.img} alt="img-produto" />
                                </figure>
                                <h2>{list.valor} Reais</h2>

                                <button className='inspecionar' onClick={() => ItemNovidade(list)}><Link to="infoCapinha" >inspecionar</Link></button>

                            </div>

                        )
                    })
                }

            </section>

        </div>
    )
}

export default NovidadesHome;
import React from "react";
import { useContext } from "react";
import { StateContext } from '../../ContextApi/states';
import { Link } from 'react-router-dom'
import './produtosHome.css';


function ProdutosHome() {

    const { produtos, setItemCapinhaInfo } = useContext(StateContext);
    

    function ItemNovidade(list) {

        setItemCapinhaInfo([list]);


    }


    return (
        <div className="novidades">
           

            <section>
                {
                    produtos.map((list) => {
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

export default ProdutosHome;
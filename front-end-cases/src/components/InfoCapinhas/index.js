import React from "react";
import './infoCapinha.css';
import { StateContext } from '../../ContextApi/states';
import { useContext, useState } from 'react';
import { toast } from "react-toastify";

function InfoCapinha() {

    const { itemCapinhaInfo, setItemCapinhaInfo, apiParaVoce, produtos } = useContext(StateContext);
    const [car, setCar] = useState(false);


    function InspecionarItem(item) {

        setItemCapinhaInfo([item]);

    }

    function favorito(item) {
        const lista = localStorage.getItem("favoritos");

        let itemSalvos = JSON.parse(lista) || [];

        itemSalvos.push(item);

        localStorage.setItem("favoritos", JSON.stringify(itemSalvos));


        var count = true;
        setCar(count);

        toast.success("Adicionado ao carrinho");
    }

    return (
        <div className="infoCapinha">

            {
                itemCapinhaInfo.map((item) => {
                    return (
                        <div className='boxInfo' key={item.id}>
                            <div className='carrinhoProduto'>

                                <button onClick={() => favorito(item)} >

                                    {car === false

                                        ? <i class="fa fa-heart" id="IconFav"></i>
                                        : <i class="fa fa-heart "></i>

                                    }

                                </button>


                            </div>

                            <figure>
                                <img src={item.img} alt="img-produto" />
                            </figure>


                            <h2>{item.modelo}</h2>
                            <h3>{item.desc}</h3>


                        </div>

                    )
                })

            }



            <article><h1>Sugestões para você</h1></article>

            <section>

                {
                    apiParaVoce.map((item) => {
                        return (
                            <div className='boxInfoNovidade' key={item.id}>


                                <figure>
                                    <img src={item.img} alt="img-produto" />
                                </figure>

                                <button onClick={() => InspecionarItem(item)}>Inspecionar</button>

                            </div>


                        )

                    })

                }
            </section>


            <section>
                {
                    produtos.map((item) => {
                        return (
                            <div className='boxInfoNovidade' key={item.id}>

                                <figure>
                                    <img src={item.img} alt="img-produto" />
                                </figure>

                                <button onClick={() => InspecionarItem(item)}>Inspecionar</button>

                            </div>


                        )

                    })

                }
            </section>






        </div>
    )

}

export default InfoCapinha;
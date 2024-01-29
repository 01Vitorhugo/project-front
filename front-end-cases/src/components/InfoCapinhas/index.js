import './infoCapinha.css';
import { StateContext } from '../../ContextApi/states';
import { useContext } from 'react';

function InfoCapinha() {

    const { itemCapinhaInfo, setItemCapinhaInfo, apiParaVoce, apiNovidade } = useContext(StateContext);


    function InspecionarItem(item) {

        setItemCapinhaInfo([item]);
        

    }


    return (
        <div className="infoCapinha">

            {
                itemCapinhaInfo.map((item) => {
                    return (
                        <div className='boxInfo' key={item.id}>

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

            <div className="title">

                <h1>Outros</h1>

                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                    <path d="M2.8125 0L0 2.04545L7.5 7.5L15 2.04545L12.1875 0L7.5 3.40909L2.8125 0Z" fill="white" />
                </svg>

            </div>

            <section>
            {
                apiNovidade.map((item) => {
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
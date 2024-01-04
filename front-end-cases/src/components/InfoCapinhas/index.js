import './infoCapinha.css';
import { StateContext } from '../../ContextApi/states';
import { useContext} from 'react';

function InfoCapinha() {

    const { itemCapinhaInfo, setItemCapinhaInfo, apiParaVoce } = useContext(StateContext);


    function InspecionarItem(item) {

        setItemCapinhaInfo([item]);
        // console.log(item);

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





        </div>
    )

}

export default InfoCapinha;
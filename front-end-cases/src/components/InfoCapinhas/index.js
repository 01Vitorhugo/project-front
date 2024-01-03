import './infoCapinha.css';
import { StateContext } from '../../ContextApi/states';
import { useContext } from 'react';

function InfoCapinha() {

    const { itemCapinhaInfo, apiParaVoce } = useContext(StateContext);

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

                        </div>
                    )

                })

            }

            <section>
                {
                    apiParaVoce.map((item) => {
                        return (
                            <div className='boxInfoNovidade' key={item.id}>

                                <figure>
                                    <img src={item.img} alt="img-produto" />
                                </figure>

                                <h2>{item.valor} Reais</h2>

                            </div>
                        )

                    })

                }
            </section>





        </div>
    )

}

export default InfoCapinha;
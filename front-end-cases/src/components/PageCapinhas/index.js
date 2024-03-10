import { StateContext } from '../../ContextApi/states';
import { useContext, useState } from 'react';
import './pageCapinhas.css';
export default function PageCapinhas() {


    const { capinhas } = useContext(StateContext);
    const [pesquisa, setPesquisa] = useState('');


    const elemento = capinhas.filter((item) => item.modelo === pesquisa)
    console.log(elemento)

    return (
        <div className='capinhas'>

            <section>
                <input type='text'
                    placeholder='Pesquisar'
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />

                {pesquisa !== '' && <p>Itens Encontrados</p>}
            </section>



            <div className='itemPesquisa'>
                {
                    elemento.map((item) => {
                        return (
                            <article>

                                <p>{item.modelo}</p>
                                <img src={item.img} alt='imagem capinhas' key={item.id}/>
                                <h2>{item.valor} Reais</h2>
                            </article>
                        )
                    })
                }

            </div>

            <main>
                {
                    capinhas.map((item) => {
                        return (
                            <div className='itemCapinhas' key={item.id}>
                                <p>{item.modelo}</p>
                                <img src={item.img} alt='imagem capinhas'/>
                                <h1>{item.valor} reais</h1>
                            </div>

                        )
                    })
                }
            </main>

        </div>


    )
}
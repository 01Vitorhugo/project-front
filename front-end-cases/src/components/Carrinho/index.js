import './carrinho.css'
import { StateContext } from '../../ContextApi/states';
import { useContext } from 'react';

function Carrinho() {
    const { fav } = useContext(StateContext);
    // console.log(fav);


    return (
        <div className='boxFavoritos'>
            {fav.map((item) => {
                return (
                    <div className='boxItem' key={item.id}>
                        <h1>{item.id}</h1>
                        <figure>
                            <img src={item.img} alt="img-produto" />
                        </figure>

                    </div>
                )

            })
            }
        </div>
    )


}

export default Carrinho;
import { useEffect, useState } from 'react';
import './carrinho.css'
import { toast } from "react-toastify";


function Carrinho() {


    const [pushItem, setPushItem] = useState([]);

    useEffect(() => {

        Atualizar();

      
     

    }, [])

    function Atualizar() {

        const item = localStorage.getItem("favoritos")
        var itemConvertido = JSON.parse(item)


        setPushItem(itemConvertido);

    }


    // console.log(pushItem);


    function excluir(item) {


        let i = pushItem.findIndex((p) => {
            return p.id === item.id;
        });

        pushItem.splice(i, 1);

        localStorage.setItem("favoritos", JSON.stringify(pushItem));

         Atualizar();

         toast.success("Excluido com sucesso");



    }






    return (
        <div className='boxFavoritos'>
            <h1>Você tem <span>{pushItem.length} itens</span> salvos !</h1>

            {

                pushItem.map((item) => {
                    return (
                        <div key={item.id} className='itemLocal'>
                            <h1>Id do protudo {item.id}</h1>
                            <p id='pag'>{item.modelo}</p>

                            <div className='imgLocal'>
                                <img src={item.img} alt='Imagem do produto salvo' />
                            </div>

                            <h2>{item.valor} Reais</h2>
                            <p>{item.desc}</p>
                            <button onClick={() => excluir(item)}>
                                <i class="fa-solid fa-trash-can"></i>
                            </button>

                        </div>
                    )

                })
            }






        </div>
    )


}

export default Carrinho;
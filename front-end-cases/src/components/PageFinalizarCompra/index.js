import { useEffect, useState } from 'react';
import './finalizarCompra.css';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


export default function FinalizarCompra() {
    const [name, setName] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    const [clienteCompra, setClienteCompra] = useState([]);


    useEffect(() => {
        ItemCompraCli();

    }, [])

    function ItemCompraCli() {


        const compraCli = localStorage.getItem("itemCompra")
        var itemConvertidoCli = JSON.parse(compraCli)

        setClienteCompra([itemConvertidoCli]);
    }



    // console.log(clienteCompra);

    const checarCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                // console.log(data)

                setEstado(data.localidade);
                setRua(data.logradouro)
                setBairro(data.bairro)
                setUf(data.uf)

            })
    }

    function enviarFormulario(e) {
        e.preventDefault();

        emailjs
            .sendForm('emailVitor', 'templateVitor', e.target, {
                publicKey: 'vl1NwiDuhehOggGLw',
            })
            .then(
                () => {
                    setName('')
                    setCep('')
                    setNumero('')
                    setComplemento('')

                    setEstado('');
                    setRua('')
                    setBairro('')
                    setUf('')

                    toast.success("Compra realizada com sucesso");

                    setInterval(() => {
                        window.location.href = "/";
                    }, 2000);

                },


                () => {
                    toast.error("Compra negada");
                },
            );


    }


    return (
        <div className='finalizarCompra'>

            <form onSubmit={enviarFormulario}>
                <label>Verificar endereço</label>

                <input type='text'
                    placeholder='Digite seu nome'
                    name='name'
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input type='text'
                    placeholder='Digite seu CEP'
                    required
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    onBlur={checarCEP}
                />

                <input type='text'
                    placeholder='Digite o Número'
                    name='numero'
                    required
                    value={numero}
                    onChange={e => setNumero(e.target.value)}

                />

                <input type='text'
                    placeholder='Digite o complemento'
                    name='complemento'
                    value={complemento}
                    onChange={e => setComplemento(e.target.value)}

                />

                {/* inputs desabilitados para puxar no email e nao aparecer para o usuario */}
                <input type='text' className='disable_none'
                    name='rua'
                    value={rua}
                    onChange={e => setRua(e.target.value)}
                />

                <input type='text' className='disable_none'
                    name='estado'
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                />

                <input type='text' className='disable_none'
                    name='uf'
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                />


                {
                    rua && estado && bairro !== '' &&
                    <div className='campo_endereco'>
                        <p>{rua} {numero}</p>
                        <p>{complemento}</p>
                        <p>{estado}, {uf}</p>

                    </div>

                }

                {numero !== '' && cep.length === 8 ? <button type='submit'>Finalizar Compra</button> : <button>Pesquisar Cep</button>}
            </form>

            <div className='itemCompraFinal'>
                {
                    clienteCompra.map((item) => {
                        return (
                            <>
                                <h1>Você esta comprando <span>{item.modelo}</span></h1>
                                <img src={item.img} alt='Imagem do produto salvo' />
                            </>
                        )
                    })

                }


            </div>



        </div>
    )
}
import { useState } from 'react';
import './finalizarCompra.css';


export default function FinalizarCompra() {
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('')
    const [estado, setEstado] = useState('')
    const [uf, setUf] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')


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

    return (
        <div className='finalizarCompra'>
            <form>
                <label>Verificar endereço</label>
                <input type='text'
                    placeholder='Digite seu CEP'
                    required
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    onBlur={checarCEP}
                />
                <input type='text'
                    placeholder='Digite o Número'
                    required
                    value={numero}
                    onChange={e => setNumero(e.target.value)}

                />
                <input type='text'
                    placeholder='Digite o complemento'
                    value={complemento}
                    onChange={e => setComplemento(e.target.value)}

                />

                {
                    rua && estado && bairro !== '' &&
                        <>
                            <p><strong>Rua:</strong> {rua}  {numero}</p>
                            <p><strong>Estado:</strong> {estado} {uf} </p>
                            <p><strong>Bairro:</strong> {bairro}</p>
                            <p><strong>Complemento:</strong> {complemento}</p>
                        </>
                }
               

                {numero !== '' && cep.length === 8   ?<button>Finalizar Compra</button>  : <button>Pesquisar Cep</button>  }
            </form>



        </div>
    )
}
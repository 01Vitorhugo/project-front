import React from "react";
import { useContext, useState, useEffect } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { StateContext } from '../../ContextApi/states';
import { signOut } from 'firebase/auth';
import { auth } from '../../BD-login';
import { onAuthStateChanged } from "firebase/auth"



function NavPage() {

    const [nav, setNav] = useState(false);

    const { log, setLog } = useContext(StateContext);

    function NavInfo() {
        setNav(true);
    }

    function VoltaNav() {
        setNav(false);
    }

    async function Logof() {
        await signOut(auth);
        setLog(false);

    }

    useEffect(() => {
        async function ObsUser() {
           onAuthStateChanged(auth, (user) => {
                if (user) {
                    setLog(true);
                } else {
                    setLog(false);
                }
            })
        }
        ObsUser();
    }, [setLog])


    return (
        <div className="nav">
            <div className='icon-menu'>


                {nav === false ?
                    <button onClick={NavInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                            <path d="M0 0V3.42857H27.4286V0H0ZM0 6.85714V10.2857H20.5714V6.85714H0ZM0 13.7143V17.1429H27.4286V13.7143H0ZM0 20.5714V24H20.5714V20.5714H0Z" fill="#0073CF" />
                        </svg>

                    </button>
                    :
                    <div className='info'>
                        <div className='info-nav'>
                            <div className='icon-nav'>
                                <button onClick={VoltaNav}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                        <path d="M4.67006 0.51178L0 4.75003L2.38471 6.91425L8.28025 12.3548L2.38471 17.7053L0 19.7793L4.67006 24.1077L7.05478 21.9435L13.0497 16.5029L18.9452 21.9435L21.2306 24.1077L26 19.7793L23.6153 17.7053L17.6204 12.3548L23.6153 6.91425L26 4.75003L21.2306 0.51178L18.9452 2.676L13.0497 8.02642L7.05478 2.676L4.67006 0.51178Z" fill="rgb(0, 115, 207)" />
                                    </svg>
                                </button>
                            </div>

                            <div className='logo-nav'>
                                <button onClick={VoltaNav}> <Link to='/'><img src={require('../../Imagens/logo.png')} alt='logo' /></Link></button>
                            </div>



                        </div>

                        <div className='topics'>
                            <ul>
                                <li>Carregadores</li>
                                <Link to='/capinhas'>Capinhas</Link>
                                <li>Cabos</li>
                                <li>Película</li>
                            </ul>
                            <div className='login'>
                                {log === true ? <button onClick={Logof}>Sair</button> : <button onClick={VoltaNav}><Link to='/login'>Login</Link></button>}

                            </div>

                        </div>
                    </div>
                }

            </div>

            <div className='logo-menu'>
                <Link to='/'><img src={require('../../Imagens/logo.png')} alt='logo' /></Link>
            </div>

        </div>

    )

}

export default NavPage;
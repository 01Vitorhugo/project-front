import './home.css';
import { useEffect} from 'react';
import { auth } from '../../BD-login';
import { toast } from "react-toastify";

import { onAuthStateChanged } from "firebase/auth"
import NovidadesHome from '../NovidadesHome';


function HomePage() {

    

    useEffect(() => {
        async function ObsUser() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // setLog(true);
                    toast.success("Você esta Online 😃");
                } else {
                    // setLog(false);
                    toast.error("Você esta Ofline 😔");
                }
            })
        }
        ObsUser();
    }, [])



    return (
        <div className="home">
            <figure className="banner-home">
                <img src={require('../../Imagens/banner-teste.png')} alt="banner" />
            </figure>

            <div className="link-whats">
                <div className="logo-whats">
                    <i className="fab fa-whatsapp"></i>
                </div>
                <div className="info-whats">
                    <h1>Entre em contato conosco</h1>
                    <p>Caso precise, só chamar no Whatsapp</p>

                </div>
            </div>
          
            <NovidadesHome />

            <div className="infoHome">
                <i className="fab fa-instagram"></i>
                <p>Nos acompanhe no @CriarInstal</p>
            </div>


           


        </div>

    )
}

export default HomePage;
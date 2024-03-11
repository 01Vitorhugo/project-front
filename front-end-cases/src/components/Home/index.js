import React from "react";
import './home.css';
import { useEffect } from 'react';
import { auth } from '../../BD-login';
import { toast } from "react-toastify";
import { Carousel } from 'flowbite-react';
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

                <Carousel slideInterval={1300}>
                    <img src={require('../../Imagens/banner-teste.png')} alt="Img1" />
                    <img src={require('../../Imagens/banner2.png')} alt="Img2" />
                    <img src={require('../../Imagens/banner3.png')} alt="Img3" />
                    <img src={require('../../Imagens/banner2.jpg')} alt="Img4" />
                </Carousel>


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
                <p>Nos acompanhe @01Vituu

                </p>
            </div>

        </div>

    )
}

export default HomePage;
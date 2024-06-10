import React from "react";
import './home.css';
import { Carousel } from 'flowbite-react';
import NovidadesHome from '../NovidadesHome';
import ProdutosHome from "../ProdutosHome";



function HomePage() {


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

            <ProdutosHome />

            <div className="infoHome">
                <i className="fab fa-instagram"></i>
                <p>Nos acompanhe @01Vituu</p>
            </div>

        </div>

    )
}

export default HomePage;
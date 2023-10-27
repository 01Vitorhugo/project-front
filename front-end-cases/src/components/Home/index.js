import './home.css';


function HomePage() {

    return (
        <div className="home">
            <figure className="banner-home">
                <img src={require('../../Imagens/banner-teste.png')} alt="banner"/>
            </figure>

            <div className="link-whats">
                <div className="logo-whats">
                    <img src={require('../../Imagens/logo-whats-branco.png')} alt="logo-whatsapp"/>
                </div>
                <div className="info-whats">
                    <h1>Entre em contato conosco</h1>
                    <p>Caso precise, só chamar no Whatsapp</p>

                </div>
            </div>


        </div>

    )
}

export default HomePage;
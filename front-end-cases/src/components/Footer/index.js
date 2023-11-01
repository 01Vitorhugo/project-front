import './footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <div className='footer-contacts'>
          <div className='logo-footer'>
            <img src={require('../../Imagens/logo.png')} alt='logo' />
          </div>

          <div className='footer-social'>
            <a href="https://www.instagram.com/x.pigs/" className="footer-link" id="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="footer-link" id="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="footer-link" id="whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <ul className='footer-list'>
          <li>
            <h3>Precisa de ajuda?</h3>
          </li>
          <li>
            <a href="#" className="footer-link">SAC</a>
          </li>
          <li>
            <a href="#" className="footer-link">Vendas</a>
          </li>
          <li>
            <a href="#" className="footer-link">Trabalhe Conosco</a>
          </li>
        </ul>

        <ul className='footer-list'>
          <h3>Formas de pagamento:</h3>
          <img src={require('../../Imagens/card_img.png')} alt='' />
        </ul>

        <div className='footer-subscribe'>
          <h3>Nós enviamos e-mails incríveis.</h3>
          <p>Saiba primeiro dos nossos lançamentos, coleções e promoções exclusivas.</p>
          <div className='input-group'>
            <input type="email" id="email" placeholder='insira seu email' />
            <button>
              <i className="far fa-envelope"></i>
            </button>
          </div>
        </div>

      </div>
      <div className='footer-copy'>
        &copy; 2023 all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
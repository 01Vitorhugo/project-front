import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './about.css';
import '@fortawesome/fontawesome-free/css/all.css';

const AboutPage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '45px',
      duration: 2000,
      reset: false,
    });
    sr.reveal('.image', { delay: 400, origin: 'left' });
    sr.reveal('.about-text', { delay: 350, origin: 'right' });
    sr.reveal('.logos-content', { delay: 350, origin: 'left' });
    sr.reveal('.logos-image', { delay: 400, origin: 'right' });
  }, []);

  return (
    <section>
      <div className='about'>
        <div className='main-about'>
          <div className='about-content'>
            <div className='about-inner'>
              <div className='image'>
                <img src={require('../../Imagens/banner-about.png')} alt='banner' />
              </div>
            </div>
          </div>
          <div className='about-content'>
            <div className='about-inner'>
              <div className='about-text'>
                <h1>Lorem Ipsum</h1>
                <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='logos'>
        <div className='main-logos'>
          <div className='main-inner'>
            <div className='logos-content'>
              <h1>Lorem Ipsum</h1>
              <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className='main-inner'>
            <div className='logos-content logos-image'>
              <img src={require('../../Imagens/logo.png')} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
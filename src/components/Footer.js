import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Footer() {
    const [country, setCountry] = useState('');
  
    function handleInputChange(e) {
      setCountry(e.target.value);
    }

    function Submit(e) {
        e.preventDefault();
        console.log('Submitted:', country);
         const formData = new FormData();
         formData.append('country', country);
         console.log('Form Data:', formData); // Add this line before the fetch call
         fetch('https://script.google.com/macros/s/AKfycbwfJGJnf4nmIvmv0rK41Iga5zH9hgXTCI5WaoRc4MwjXL733Nt8MEyh-IxE8juQ_umfVg/exec', {
           method: 'POST',
           body: formData,
         });
            setCountry('');
      }
      
      return (
        <div className='footer-container'>
          <section className='footer-subscription'>
            <form>
              <p className='footer-subscription-heading'>
                If you could visit any one country in the world, which would you choose?
              </p>
              <p className='user_response'>(For a personal study)</p>
              <div className='input-areas'>
                <input
                  type='text'
                  name='country'
                  placeholder='Type Country Here'
                  className='destination'
                  value={country}
                  onChange={handleInputChange}
                />
                <Button buttonStyle='btn--outline' onClick={Submit}>
                  Enter
                </Button>
              </div>
            </form>
          </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className = "footer-link-items">
                    <h2>Contact Me</h2>
                    <a href="mailto:tanner.macpherson3@gmail.com">Email</a>
                    <a href="tel:+19105239212">Phone: (910) 523-9212</a>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className = "footer-link-items">
                    <h2>Social Media</h2>
                    <Link to ="https://www.linkedin.com/in/tannermacpherson">LinkedIn</Link>
                    <Link to ="https://www.instagram.com/tanner.macpherson/">Instagram</Link>
                    <Link to ="https://www.facebook.com/tanner.macpherson.5">Facebook</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
        <div className="social-media-wrap">
          <div className='footer-logo'>
            <Link to='/' className="social-logo">
              Tanner Macpherson&nbsp;<i class="fa-solid fa-diamond" ></i>
            </Link>
          </div>
          <small className="website-rights">Tanner Macpherson © 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="https://www.facebook.com/tanner.macpherson.5"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f fa-lg" /> {/* Added 'fa-lg' class to increase the size */}
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://www.instagram.com/tanner.macpherson/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg" /> {/* Added 'fa-lg' class to increase the size */}
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/tannermacpherson"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-lg" /> {/* Added 'fa-lg' class to increase the size */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;







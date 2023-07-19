import './footer.css';
import Button from '../button/button';
import Link from '../links/link';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as Youtube } from '../../assets/icons/icon-youtube.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';
import { useState, useRef } from 'react';

function Footer() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const emailField = useRef();
    const date= new Date();
    const year= date.getFullYear(); 
    const emailPattern = /^[\w.%+-]+@(?:[\w-]+\.)+[\w]{2,6}$/;

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError('');
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(email === ''){
            setError('Email cannot be left empty.');
            emailField.current.focus();
            return;
        }
        if(emailPattern.test(email)){
            alert('You have been subscribed for newsletter.');
        }else{
            setError('Please enter a valid email address.');
            emailField.current.focus();
        }
    }

    const handleBlur = (e) => {
        setError('');
    }
    return (
        <footer className="footer flex flex-column">
            <section className="newsletter-signup w-100">
                <form action="" name='newsletter' className='newsletter flex flex-column' id='newsletter' autoComplete='off'>
                    <section className="email-container w-100">
                        <input type="email" name="email" id="email" className={error && 'error-occur'} placeholder='Updates in your inbox...' value={email} onChange={handleChange} onBlur={handleBlur} ref={emailField}/>
                    </section>
                    <p className={error ? `error`: `error none`}>{error}</p>
                    <section className="form-btn">
                        <Button name='Go' click={handleClick} />
                    </section>
                </form>
            </section>

            <section className="footer-navigation flex flex-column w-100">
                <Link href='#home' class='footer-links' name='Home' />
                <Link href='#' class='footer-links' name='Pricing' />
                <Link href='#' class='footer-links' name='Products' />
                <Link href='#about' class='footer-links' name='About Us' />
                <Link href='#' class='footer-links' name='Careers' />
                <Link href='#community' class='footer-links' name='Community' />
                <Link href='#' class='footer-links' name='Privacy Policy' />
            </section>

            <section className="footer-icons flex flex-column">
                <section className="social-icons flex">
                    <Facebook />
                    <Youtube />
                    <Twitter />
                    <Pinterest />
                    <Instagram />
                </section>
                <section className="footer-logo">
                    <Logo />
                </section>
            </section>

            <section className="copy">
                <p className='copy-txt'>Copyright {year}. All Rights Reserved</p>
            </section>
        </footer>
    );
}

export default Footer;
import './header.css';
import { ReactComponent as CompanyLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import Link from '../links/link';
import Button from '../button/button';
import { useState } from 'react';

function Header() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        document.body.classList.toggle('nav-active');
        setIsClicked((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <header className="header flex">
            <section className="company-logo">
                <CompanyLogo />
            </section>
            <section className={isClicked ? 'nav-container' : "nav-container invisible"}>
                <nav className={isClicked ? 'navbar flex flex-column show' : 'navbar flex flex-column invisible'}>
                    <Link class='navbar-item' href='#' name='Pricing' />
                    <Link class='navbar-item' href='#' name='Product' />
                    <Link class='navbar-item' href='#' name='About Us' />
                    <Link class='navbar-item' href='#' name='Careers' />
                    <Link class='navbar-item' href='#' name='Community' />
                </nav>
            </section>
            <section className="header-btn none">
                <Button name='Get Started' />
            </section>
            <button className='toggle-nav' onClick={handleClick}>{isClicked ? <Close /> : <Hamburger />}</button>
        </header>
    );
}

export default Header;
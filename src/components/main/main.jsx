import Button from '../button/button';
import Illustration from '../../assets/icons/illustration-intro.svg';
import TestimonalCard from '../testimonials/testimonialsCard';
import Ali from '../../assets/images/avatar-ali.png'
import Anisha from '../../assets/images/avatar-anisha.png'
import Richard from '../../assets/images/avatar-richard.png'
import Shanai from '../../assets/images/avatar-shanai.png'
import { useEffect, useState } from 'react';
import './main.css';

function Main() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide, length]);

    const changeHeaderBackground = (e) => {
        const parentElement = e.target.parentElement;
        parentElement.classList.toggle('color');
    }

    return (
        <main id="main" className='text-center'>
            <section className="hero flex flex-column" id='home'>
                <section className="hero-img w-100 flex">
                    <img src={Illustration} alt="Illustration-logo" title='Illustration' />
                </section>
                <section className="hero-content flex flex-column">
                    <h1>Bring everyone together to build better products.</h1>
                    <article>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
                    </article>
                    <section className="hero-btn">
                        <Button name='Get Started' />
                    </section>
                </section>
            </section>
            <section className="about-manage flex flex-column" id='about'>
                <section className="left-container">
                    <h2>What’s different about Manage?</h2>
                    <article>
                        Manage provides all the functionality your team needs, without
                        the complexity. Our software is tailor-made for modern digital
                        product teams.
                    </article>
                </section>
                <section className="right-container flex flex-column text-left">
                    <article>
                        <header className="article-header flex">
                            <Button name='01' class='number' change={changeHeaderBackground} />
                            <h3>Track company-wide progress</h3>
                        </header>
                        <p>
                            See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </article>
                    <article>
                        <header className="article-header flex">
                            <Button name='02' class='number' change={changeHeaderBackground} />
                            <h3>Advanced built-in reports</h3>
                        </header>
                        <p>
                            Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </article>
                    <article>
                        <header className="article-header flex">
                            <Button name='03' class='number' change={changeHeaderBackground} />
                            <h3>Everything you need in one place</h3>
                        </header>
                        <p>
                            Stop jumping from one service to another to communicate, store files,
                            track tasks and share documents. Manage offers an all-in-one team
                            productivity solution.
                        </p>
                    </article>
                </section>
            </section>
            <section className="testimonials flex flex-column" id='community'>
                <h2>What they’ve said</h2>
                <section className="testimonials-container flex w-100">
                    <section className="slider flex w-100 text-center">
                        <TestimonalCard slide={currentSlide === 0 ? 'current-slide' : ''} src={Anisha} name='Anisha Li' review='“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”' number='1' />
                        <TestimonalCard slide={currentSlide === 1 ? 'current-slide' : ''} src={Ali} name=' Ali Bravo' review='“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”' number='2' />
                        <TestimonalCard slide={currentSlide === 2 ? 'current-slide' : ''} src={Richard} name='Richard Watts' review='“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”' number='3' />
                        <TestimonalCard slide={currentSlide === 3 ? 'current-slide' : ''} src={Shanai} name='Shanai Gough' review='“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”' number='4' />
                    </section>
                </section>
                <section className="dots flex">
                    <span className={currentSlide === 0 ? 'current-dot' : ''}></span>
                    <span className={currentSlide === 1 ? 'current-dot' : ''}></span>
                    <span className={currentSlide === 2 ? 'current-dot' : ''}></span>
                    <span className={currentSlide === 3 ? 'current-dot' : ''}></span>
                </section>
                <section className="testimonials-btn">
                    <Button name='Get Started' />
                </section>
            </section>
            <section className="cta flex flex-column">
                <h2>Simplify how your team works today.</h2>
                <section className="cta-btn">
                    <Button name='Get Started' />
                </section>
            </section>
        </main>
    );
}

export default Main;
import './testimonialsCard.css';

function TestimonalCard(props) {
    return (
        <section className={`testimonial-card flex flex-column w-100 ${props.slide}`} style={{'--i' : `${props.number}`}}>
            <section className="avatar">
                <img src={props.src} alt="" />
            </section>
            <h4 className='name'>{props.name}</h4>
            <p className='review'>{props.review}</p>
        </section>
    );
}

export default TestimonalCard
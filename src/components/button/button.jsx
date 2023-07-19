import './button.css';

function Button(props){
    return (
        <button className={props.class} onClick={props.click || props.change}>{props.name}</button>
    )
}

export default Button;
 function Link(props){
    return (
        <a href={props.href} className={props.class}>{props.name}</a>
    );
 }

 export default Link;
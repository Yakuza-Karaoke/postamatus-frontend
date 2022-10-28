function Button (props) {
    return (
            <div className={props.class}>
                <p>{props.name}</p>
            </div>
    )
}

export default Button;
function Button (props) {
    return (
            <div className={props.class} onClick={props.onClickHandler}>
                <p>{props.name}</p>
            </div>
    )
}

export default Button;
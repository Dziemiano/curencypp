const Input= ({type, onChange, value, className}) => {
    return (
        <input type={type} value={value} onChange={onChange} className={className}></input>
    )
}

export default Input
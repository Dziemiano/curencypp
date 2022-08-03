const Select = ({selectValues, handleSelect, value, className}) => {

    const names = selectValues.map(value => <option key={value} value={value}>{value}</option>)
   
    return (
    <select onChange={handleSelect} value={value} className={className}>
        {names}
    </select>
    )
}

export default Select
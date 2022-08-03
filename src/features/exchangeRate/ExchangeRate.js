import { useDispatch, useSelector } from 'react-redux'

import codes from "../../consts/codes"
import styles from "./exchangeRate.module.css"

import Select from "../../components/select/Select"
import List from "../../components/list/List"
import Spinner from "../../components/loadingSpinner/LoadingSpinner"

import { changeBaseCurrency } from "../converter/converterSlice"
import { converter } from "../converter/converterSlice"
import { rates } from "../../AppSlice"



const ExchangeRate = () => {

    const dispatch = useDispatch();

    const baseCurrency = useSelector(converter).baseCurrency
    const exchangeRates = useSelector(rates)
    const isLoading = exchangeRates.status === "loading" ? true : false 

    const handleSelect = (e) => dispatch(changeBaseCurrency(e.target.value))

    const listElement = exchangeRates.status === "success" ? 
        Object.entries(exchangeRates.data.data).map(
            (data) => <li key={data[0]}><div>1 {data[0]}</div><div>=</div><div>{(1/data[1]).toFixed(2)} {baseCurrency}</div></li>
        ) :
        <div></div>
    
    return (
            <div className={styles.exchangeRate}>
                <h1>Exchange Rates</h1>
                <Select
                    selectValues = {codes}
                    handleSelect = {handleSelect}
                    value = {baseCurrency}
                />
                {isLoading ? 
                <div className={styles.spinner}>
                    <Spinner />
                </div>
                : 
                <List 
                    listElements = {listElement}
                />}
            </div>
    )
}

export default ExchangeRate
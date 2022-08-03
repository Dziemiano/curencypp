import { useDispatch, useSelector } from 'react-redux'

import codes from "../../consts/codes"
import styles from "./converter.module.css"

import Select from "../../components/select/Select"
import Input from "../../components/input/Input"
import Spinner from "../../components/loadingSpinner/LoadingSpinner"

import { rates } from "../../AppSlice"
import { converter, changeBaseCurrency, changeConvertToCurrency, changeAmount } from "./converterSlice"

const Converter = () => {

  const dispatch = useDispatch() 

  const currency = useSelector(converter)
  const exchangeRates = useSelector(rates)
  
  const amount = currency.amount
  const baseCurrency = currency.baseCurrency
  const convertToCurrency = currency.convertToCurrency
  const isLoading = exchangeRates.status === "loading" ? true : false

  const data = !isLoading ? exchangeRates.data.data : {}
  const calculated = (data[convertToCurrency] * amount).toFixed(2)

  const handleSelectFrom = (e) => dispatch(changeBaseCurrency(e.target.value))
  const handleSelectTo = (e) => dispatch(changeConvertToCurrency(e.target.value))
  const handleInputChange = (e) => dispatch(changeAmount(e.target.value))

    return (
      <div className={styles.converter}>
        <h1>Currency Converter</h1>
        <div className={styles.select}>
          <Input
            type="number"
            value={amount}
            onChange={handleInputChange}
            className={styles.value}
          />
          <Select
            selectValues = {codes}
            handleSelect = {handleSelectFrom}
            value = {baseCurrency}
            className = {styles.select_box}
          />
        </div>
        <div className={styles.select}>
          {isLoading ?
          <div className={styles.spinner}
            ><Spinner />
          </div>
          :
          <div className={styles.value}>{calculated}</div>}  
          <Select
            selectValues = {codes}
            handleSelect = {handleSelectTo}
            value = {convertToCurrency}
            className = {styles.select_box}
          />
        </div>
      </div>
    )
}

export default Converter
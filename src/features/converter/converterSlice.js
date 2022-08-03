import { createSlice } from '@reduxjs/toolkit'

const converterSlice = createSlice({
  name: 'converter',
  initialState: {
    amount: 1,
    baseCurrency: 'USD',
    convertToCurrency: 'EUR',
  },
  reducers: {
    changeAmount: (state, element) => {
        state.amount = element.payload
    },
    changeBaseCurrency: (state, element) => {
      state.baseCurrency = element.payload
    },
    changeConvertToCurrency: (state, element) => {
      state.convertToCurrency = element.payload
    },
  }
})

export const converter = (state) => state.converter
export const { changeAmount, changeBaseCurrency, changeConvertToCurrency} = converterSlice.actions
export default converterSlice.reducer

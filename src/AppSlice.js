
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getRates = createAsyncThunk(
  'rates/getRates',
  async ({ baseCurrency }, { dispatch, getState }) => {
    try {    let response = await fetch(
      `https://freecurrencyapi.net/api/v2/latest?apikey=132ff580-3111-11ec-8516-91700e07a924&base_currency=${baseCurrency}`
    )
    return response.json()
    } catch (error) {
      throw error
    }
  }
)

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    status: 'loading',
    data: {}
  },
  extraReducers: {
    [getRates.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getRates.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.status = 'success'
    },
    [getRates.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export const rates = (state) => state.rates
export default ratesSlice.reducer

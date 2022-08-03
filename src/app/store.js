import { configureStore } from '@reduxjs/toolkit';

import converterReducer from '../features/converter/converterSlice'
import ratesReducer from '../AppSlice'

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
    converter: converterReducer,
  },
});
 
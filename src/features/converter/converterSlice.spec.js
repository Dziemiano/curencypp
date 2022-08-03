import converterReducer, {
    changeAmount,
    changeBaseCurrency,
    changeConvertToCurrency
  } from './converterSlice';
  
  describe('converter reducer', () => {
    const initialState = {
        amount: 1,
        baseCurrency: 'USD',
        convertToCurrency: 'EUR',
    };
    it('should handle initial state', () => {
      expect(converterReducer(undefined, { type: 'unknown' })).toEqual({
        amount: 1,
        baseCurrency: 'USD',
        convertToCurrency: 'EUR',
      });
    });
  
    it('should handle amount change', () => {
      const actual = converterReducer(initialState, changeAmount(10));
      expect(actual.amount).toEqual(10);
    });
  
    it('should handle base currency change', () => {
      const actual = converterReducer(initialState, changeBaseCurrency('EUR'));
      expect(actual.baseCurrency).toEqual('EUR');
    });
  
    it('should handle convert to currency change', () => {
      const actual = converterReducer(initialState, changeConvertToCurrency('USD'));
      expect(actual.convertToCurrency).toEqual('USD');
    });
  });
  
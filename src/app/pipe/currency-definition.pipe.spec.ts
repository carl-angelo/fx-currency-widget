import { CurrencyDefinitionPipe } from './currency-definition.pipe';

describe('CurrencyDefinitionPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyDefinitionPipe();
    expect(pipe.transform('EUR', [{key: 'EUR', value: 'Euro'}])).toBe('Euro');
  });
});

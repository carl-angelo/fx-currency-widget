import { CurrencyDefinitionPipe } from './currency-definition.pipe';

describe('CurrencyDefinitionPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyDefinitionPipe();
    expect(pipe).toBeTruthy();
  });
});

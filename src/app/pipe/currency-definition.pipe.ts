import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyDefinition'
})
export class CurrencyDefinitionPipe implements PipeTransform {

  transform(value: any, data: Array<{key: string, value: string}>): string {
    const result = data.find(d => d.key === value);
    return result ? result.value : value;
  }

}

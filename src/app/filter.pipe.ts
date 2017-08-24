import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrays: any, term: any): any {
   if(term === undefined)
    return arrays

   return arrays.filter(function(a)
  {
    return a.name.toLowerCase().includes(term.toLowerCase())
  })
  }

}

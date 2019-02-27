import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (typeof args === 'undefined') return value;

    return value.filter(task => {
      return task.title.toUpperCase().indexOf(args.toUpperCase()) >= 0;
    });
  }

}

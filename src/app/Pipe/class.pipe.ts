import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class WelcomePipe implements PipeTransform {

  transform(value:string): string {
    let message = 'Year ' + value
    return message
  }

}

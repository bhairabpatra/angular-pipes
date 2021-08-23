import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'ageinYear'
})
export class AgeinYearPipe implements PipeTransform {

  transform(value: Date|moment.Moment): any {
    if (!value) return value;

		return moment().diff(value, 'years')+" Years";

  }


  }



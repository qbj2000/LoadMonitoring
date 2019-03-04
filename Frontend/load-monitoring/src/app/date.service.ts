import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private datepipe: DatePipe) { }

  toTime(date: string){
    return new Date(date).getTime()
  }

  toString(date: string, format:string){
    return this.datepipe.transform(date, format);
  }

}

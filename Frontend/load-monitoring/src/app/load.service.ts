import { Injectable } from '@angular/core';
import { interval, Observable, BehaviorSubject, Subject, throwError} from 'rxjs'
import { map, flatMap, catchError, retry, takeUntil } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Load } from './modeles/load'

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(private http: HttpClient) { }

  // list of data currently in the window to send to statistic comp
  loadsList = new BehaviorSubject<Load[]>([])
  cast = this.loadsList.asObservable();

  // stop calling the rest service when the monitor is not displayed
  stopLooper = new Subject();

  // append loadsList
  newLoads(loads: Load[]){
    this.loadsList.next(loads);
  }

  // get ONE last value of laod
  getLiveLoad(): Observable<Load> {
    return this.http.get<Load>('http://localhost:5000/get_load').pipe(
      retry(3),
      catchError(err => this.handleError(err)),
    )
  }

  // get multiple loads
  getLastLoads(minutes:number): Observable<Load[]> {
    return this.http.get<Load[]>('http://localhost:5000/get_loads/' + minutes).pipe(
      retry(3),
      catchError(err => this.handleError(err)),
    )
  }

  // initiate the looper that will request one load to the rest service every 10 secondes 
  getDataAtInterval(){
    return  interval(1000*10).pipe(
      takeUntil(this.stopLooper),
      flatMap(() => {return this.getLiveLoad()})
    )
  }

  // kill the looper 
  killLooper(){
    this.stopLooper.next()
  }
  

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}

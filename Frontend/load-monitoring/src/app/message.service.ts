import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { ALERT_THRESHOLD } from './modeles/Constants'

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  messageThreshold = new BehaviorSubject<number>(ALERT_THRESHOLD)
  cast = this.messageThreshold.asObservable();

  isAlertOn = new BehaviorSubject<boolean>(false)
  castAlert = this.isAlertOn.asObservable()

  // to communicate threashold level between statistics and monitor componenent 
  newThreshold(value: number){
    this.messageThreshold.next(value);
  }

  // to keep the status of the alert when the monitor component is destroyed
  newAlertStatus(bool: boolean){
    this.isAlertOn.next(bool)
  }
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadService } from '../load.service'
import { Load } from '../modeles/load'
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from '../message.service';
import { ALERT_THRESHOLD } from '../modeles/Constants'
import { DateService } from '../date.service'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {

  constructor(private service: LoadService, public messageService: MessageService, private dateService: DateService) { }

  // to unsubscibe our service when the page is not on
  private ngUnsubscribe = new Subject();

  // current data in the window
  currentData: Load[]

  // value used to display the alert
  averageLast2Min: number

  // different statistic we want to show 
  runningAverage: number
  runningMax: number
  runningMin: number
  runningStd: number

  // threashold alert value
  alertThreshold: number

  // has the threshold alert been activated yet 
  isAboveThreashold: boolean

  // to know the trend of the stats: values [-1, 0, 1]
  averageTrend:number = 0
  stdTrend:number = 0
  minTrend:number = 0
  maxTrend:number = 0

  ngOnInit() {
    this.messageService.castAlert.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res) => {
      this.isAboveThreashold = res;
    })

    // retrieve the data in the window from the monitor component 
    this.service.loadsList.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res) => {
      this.currentData = res
      this.mainRoutine()
    })
    // retrieve the new threshold defined in the monitor component
    this.messageService.messageThreshold.pipe(takeUntil(this.ngUnsubscribe)).subscribe((res: number) => {
      // console.log(res)
      this.alertThreshold = res
    })
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }

  mainRoutine(){
// Calculate all the statistics we want to display 
    if (this.currentData.length>0){
      let values = this.currentData.map(res => res.value)
      let valuesShort = values.slice(-12,-1)
      this.averageLast2Min = this.average(valuesShort)
      
      let tempRunningAverage = this.average(values)
      let tempRunningStd = this.standardDeviation(values)
      let tempRunningMax = this.max(values)
      let tempRunningMin = this.min(values)

      this.averageTrend = this.trend(this.runningAverage, tempRunningAverage)
      this.stdTrend = this.trend(this.runningStd, tempRunningStd)
      this.minTrend = this.trend(this.runningMin, tempRunningMin)
      this.maxTrend = this.trend(this.runningMax, tempRunningMax)

      this.runningAverage = tempRunningAverage
      this.runningStd = tempRunningStd
      this.runningMax = tempRunningMax
      this.runningMin = tempRunningMin

      this.checkAlert()

    }
  }

  checkAlert(){
      // part where we check if the average load over the last 2 minutes exceeds the threshold 
      if (this.averageLast2Min>this.alertThreshold && !this.isAboveThreashold){
        this.messageService.add("High load generated an alert - load = " + 
        this.round(this.averageLast2Min, 2) + ", triggered at " + this.dateService.toString(this.currentData[this.currentData.length-1].time, 'mediumTime'))
        this.messageService.newAlertStatus(true)
      }
      if (this.averageLast2Min<this.alertThreshold && this.isAboveThreashold){
        this.messageService.add("Load back under Threshold at " + this.dateService.toString(this.currentData[this.currentData.length-1].time, 'mediumTime'))
        this.messageService.newAlertStatus(false)
      }
  }

  trend(oldValue: number, newValue: number){
    if (newValue > oldValue) {
      return 1;
    }
    else if (newValue < oldValue) {
      return -1;
    }
    else {
      return 0;
    }
  }

  round(value, decimals) {
    return Number(value.toFixed(decimals))
  }

  min(values){
    return values.reduce((min, a) => {
      if (min<a){return min}
    else{return a}})
  }

  max(values){
    return values.reduce((max, a) => {
      if (max>a){return max}
    else{return a}})
  }

  standardDeviation(values){
    let avg = this.average(values);
    
    let squareDiffs = values.map(value => {
      let diff = value - avg;
      let sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    let avgSquareDiff = this.average(squareDiffs);
  
    let stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  
  average(data){
    var sum = data.reduce((sum, value) => {
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  }

}

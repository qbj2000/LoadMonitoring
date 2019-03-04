import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { LoadService } from '../load.service';
import { Observable, interval } from 'rxjs';
import { Load } from '../modeles/load'
import { DEFAULT_WINDOW_SIZE, ALERT_THRESHOLD} from '../modeles/Constants'
import { plot, extendTraces, relayout, newPlot} from 'plotly.js/dist/plotly.min.js'
import { DateService } from '../date.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  @ViewChild('graph') el: ElementRef;

  // data currently being displayed
  currentData: Load[] = []

  //  number of minutes being displayed
  windowSize: number = DEFAULT_WINDOW_SIZE

  // threshold for alert
  alertThreshold: number = ALERT_THRESHOLD

  constructor(private service: LoadService, private dateService: DateService, private messageService: MessageService) { }
  
  ngOnInit() {

    // create new chart 
    this.createNewChart(this.windowSize)

    // start listening to new load every 10s
    this.service.getDataAtInterval().subscribe((data: Load) => {
      if (data) {
        this.extendChart(data)
      }
      else{
        console.log("bad load received from service")
      }
    })
  }

  ngOnDestroy(){
    this.service.killLooper()
  }

  // let the message component know that the threshold has been changed
  updateThreshold(){
    this.messageService.newThreshold(this.alertThreshold)
  }

  // resize the window
  updateWindow() {
    this.createNewChart(this.windowSize)
  }

  // create chart function 
  createNewChart(window: number){
    this.service.getLastLoads(window).subscribe((res: Load[])=> {
      // when changing page the monitor will be reloaded but we dont want to start the graph from scratch 
      if (res) {
        this.currentData = res;
        this.buildChart();
        this.service.newLoads(this.currentData);
      }
      else {
        console.log("Bad data received from service")
      }

    },
    (err) => {console.log("Cannot create the chart!!! AIE AIE AIE")}
  )
  }


  buildChart(){

    const element = this.el.nativeElement;
    let dataX: number[]
    let dataY: number[]

    dataX = this.currentData.map((res) => this.dateService.toTime(res.time))
    dataY = this.currentData.map((res) => {return res.value})

    const data = [{
      x: dataX,
      y: dataY,
    }]

    const style = {
      xaxis: {
        type: 'date',
        title: 'Time',
        tickformat: '%H:%M:%S',
      },
      yaxis: {
        title: 'Normalized load average'
      },
      margin: { t: 0 },
      type: 'line',
      title: 'Load monitoring'
    }

    newPlot(element, data, style)

    // return for testing... basically we assume that the function provided by plotly work. 
    // we should just make sure that the input we give are good
    return [element, data, style]

    }

    // add data to the current chart 
extendChart(load: Load){
  
  const element = this.el.nativeElement;
  let t = this.dateService.toTime(load.time)
  let data = {
    x: [[t]],
    y: [[load.value]]
  }

  extendTraces(element, data, [0])

  this.currentData.push(load)

  this.checkWindow()

  this.service.newLoads(this.currentData)

}

// function to resize the chart according to the current window
checkWindow(){
  const element = this.el.nativeElement;
  while (this.currentData.length > this.windowSize * 6) {
    let newLeft: number
    let currentRight: number
    newLeft = this.dateService.toTime(this.currentData.shift().time)
    currentRight = this.dateService.toTime(this.currentData[this.currentData.length-1].time)
    relayout(element, {
      xaxis: {
        type: 'date',
        range: [newLeft, currentRight],
        tickformat: '%H:%M:%S',
      }
    })
  }
}

// to have a responsive graph 
onResize(){
  const element = this.el.nativeElement;
  relayout(element, {
  width: 0.9 * 0.75 * window.innerWidth,
  height: 0.5 * window.innerHeight
  })
}

}

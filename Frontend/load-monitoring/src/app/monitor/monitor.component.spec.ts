import { async, ComponentFixture, TestBed, fakeAsync , tick} from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http'; 
import { DatePipe } from '@angular/common';
import { StatisticsComponent } from '../statistics/statistics.component'
import { MessagesComponent } from '../messages/messages.component'
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs'
import { Load } from '../modeles/load'
import { LoadService } from '../load.service' 

import { MonitorComponent } from './monitor.component';

describe('MonitorComponent', () => {
  let component: MonitorComponent;
  let fixture: ComponentFixture<MonitorComponent>;

  let serviceStub: any 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MonitorComponent, StatisticsComponent, MessagesComponent],
      providers: [HttpClient, HttpClientModule, HttpHandler, DatePipe, {provide:LoadService, useValue: serviceStub}]
    })
    .compileComponents();
  }));

  serviceStub = {
    getLiveLoad: () => of(new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.5)),
    getLastLoads: (window) => of([new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.6), 
    new Load("Sun, 03 Mar 2019 02:38:39 GMT", 0.5)]),
    getDataAtInterval: () => this.getLiveLoad,
    newLoads: () => [new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.5)]

  }

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new graph ', fakeAsync(() => {
    // component.currentData = [new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.6), 
    // new Load("Sun, 03 Mar 2019 02:38:39 GMT", 0.5)]
    expect(component.currentData.length).toBeFalsy()
    component.createNewChart(10) 
    // we creating the chart we fill the currentData and this is done asynchronously 
    tick(500)
    expect(component.currentData.length).toBeTruthy()
    // buildChart is already called in create new chart but we dont know if it actually worked that why we called 
    // it again with the data that were provided previously
    let res = component.buildChart()
    // expect the html element to exist
    expect(res[0]).toBeDefined()

    // expect the data to be filled
    expect(res[1]).toBeDefined()
    expect(res[1][0]).toBeDefined()
    expect(res[1][0].x).toBeDefined()
    expect(res[1][0].y).toBeDefined()

    // expect the layout to be defined 
    expect(res[2]).toBeDefined()
    expect(res[2].xaxis).toBeDefined()
    expect(res[2].yaxis).toBeDefined()

  })

  // Note: there s no really such thing as "testing" the graph itself as this is part
  // of the plotly library


)
});

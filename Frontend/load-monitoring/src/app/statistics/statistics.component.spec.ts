import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http'; 
import { DatePipe } from '@angular/common';
import { Load } from '../modeles/load';
import { MessageService } from '../message.service';

import { StatisticsComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  let serviceStub: any 

  // serviceStub = {
  //   getLiveLoad: () => of(new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.5)),
  //   getLastLoads: () => of([new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.6), 
  //   new Load("Sun, 03 Mar 2019 02:38:39 GMT", 0.5)]),
  //   getDataAtInterval: () => this.getLiveLoad,
  //   newLoads: () => [new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.5)]

  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsComponent ],
      providers: [HttpClient, HttpClientModule, HttpHandler, DatePipe, MessageService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an alert and then release it', () => {
    expect(component.isAboveThreashold).toBeFalsy()
// create the alert
    component.averageLast2Min = 1.2
    component.currentData = [new Load("Sun, 03 Mar 2019 02:37:39 GMT", 0.5)]
    component.checkAlert()
    expect(component.isAboveThreashold).toBeTruthy()
    expect(component.messageService.messages).toBeDefined()
    var msgAlert = "High load generated an alert - load = 1.2, triggered at 9:37:39 PM"
    expect(component.messageService.messages[0]).toBe(msgAlert)
// the alert is gone
    component.averageLast2Min = 0.8
    component.checkAlert()
    expect(component.isAboveThreashold).toBeFalsy()
    expect(component.messageService.messages).toBeDefined()
    var msgNonAlert = "Load back under Threshold at 9:37:39 PM"
    expect(component.messageService.messages[0]).toBe(msgAlert)
    expect(component.messageService.messages[1]).toBe(msgNonAlert)
  });



  it('should check trend function', () => {
    expect(component.trend(2, 3)).toBe(1)
  });

  it('should check round function', () => {
    expect(component.round(2.7465, 2)).toBe(2.75)
  });

  it('should check the average function', () => {
    expect(component.average([10, 20, 30])).toBe(20)
  });

  it('should check min function', () => {
    expect(component.min([1,2,3])).toBe(1)
  });

  it('should check max function', () => {
    expect(component.max([1,2,3])).toBe(3)
  });

});

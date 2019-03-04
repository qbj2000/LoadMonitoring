import { TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [DatePipe]
  }));

  it('should be created', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service).toBeTruthy();
  });

  it('should test toTime funcion', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service.toTime("Sun, 03 Mar 2019 02:37:39 GMT")).toBe(1551580659000)
  })

  it('should test toString function', () => {
    const service: DateService = TestBed.get(DateService);
    expect(service.toString("Sun, 03 Mar 2019 02:37:39 GMT", "mediumTime")).toBe("9:37:39 PM")
  })
});

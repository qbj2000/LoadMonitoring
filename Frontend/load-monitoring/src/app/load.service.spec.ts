import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http'; 

import { LoadService } from './load.service';

describe('LoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient, HttpClientModule, HttpHandler],
  }));

  it('should be created', () => {
    const service: LoadService = TestBed.get(LoadService);
    expect(service).toBeTruthy();
  });
});

import {getTestBed, TestBed} from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    })
    service = TestBed.get(AppService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should call getSymbols()', () => {
    service.getSymbols().subscribe(data => {
      const keys = Object.keys(data);
      expect(keys.length).toBeGreaterThan(1);
    });

    const request = httpMock.expectOne( `${service.symbolAPI}`);
    expect(request.request.method).toBe('GET');
  });

  it('should call getCurrency()', () => {
    service.getCurrency().subscribe(data => {
      const keys = Object.keys(data);
      expect(keys.length).toBeGreaterThan(1);
    });

    const request = httpMock.expectOne( `${service.currencyAPI}`);
    expect(request.request.method).toBe('GET');
  });
});

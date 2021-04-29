import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {map, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSymbols(): Observable<any> {
    return this.http.get(`${environment.api.endpoint}/symbols?access_key=${environment.api.key}`)
      .pipe(
        take(1),
        map((data: any) => data.symbols)
      );
  }

  getCurrency(): Observable<any> {
    return this.http.get(`${environment.api.endpoint}/latest?access_key=${environment.api.key}`)
      .pipe(
        take(1),
        map((data: any) => data.rates)
      );
  }
}

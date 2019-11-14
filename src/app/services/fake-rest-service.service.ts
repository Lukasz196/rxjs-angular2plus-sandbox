import {Injectable} from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {first, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FakeRestServiceService {
  dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {
  }

  public getParam(): Observable<string> {
    return of('fakeData').pipe(first());
  }

  public getStringDataWithParam(param: string): Observable<string> {
    return of(`fakeData with param = ${param}`).pipe(first());
  }

  public getDataFromServer() {
    return this.getParam()
      .pipe(tap(receivedData => this.makeSomeAction(receivedData)));
  }

  public getDataFromServer2() {
    const obs = new Subject();
    const that = this;
    this.getParam().subscribe(function (receivedData: string) {
      that.makeSomeAction(receivedData);
      obs.next(receivedData);
      this.complete();
    });
    return obs.asObservable();
  }


  private makeSomeAction(receivedData: string) {
    console.log(receivedData);
  }
}

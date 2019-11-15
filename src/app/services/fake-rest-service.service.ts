import {Injectable} from '@angular/core';
import {AsyncSubject, Observable, of} from 'rxjs';
import {first, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

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
    return this.getParam().pipe(
      first(),
      tap((receivedData: string) => {
        return this.makeSomeAction(receivedData);
      })
    );
  }

  public getDataFromServer2() {
    const obs = new AsyncSubject();
    this.getParam()
      .pipe(take(1))
      .subscribe((receivedData: string) => {
        this.makeSomeAction(receivedData);
        obs.next(receivedData);
        obs.complete();
      }, (error) => {
        obs.error(error);
      });
    return obs.asObservable();
  }


  private makeSomeAction(receivedData: string) {
    console.log(receivedData);
  }
}

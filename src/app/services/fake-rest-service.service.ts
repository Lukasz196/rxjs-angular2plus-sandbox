import {Injectable} from '@angular/core';
import {AsyncSubject, combineLatest, Observable, of} from 'rxjs';
import {first, map, take, tap} from 'rxjs/operators';
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

  public getComplexData(): Observable<string> {
    return combineLatest([
      this.getParam(),
      this.getStringDataWithParam('param')
    ]).pipe(
      map((combinedData: [string, string]) => this.mapComplexData(combinedData))
    );
  }

  private mapComplexData([param, dataWithParam]) {
    return '' + param + dataWithParam;
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

import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FakeRestServiceService {

  constructor() { }

  public getParam(): Observable<string>{
    return of('fakeData').pipe(first());
  }

  public getStringDataWithParam(param: string): Observable<string>{
    return of(`fakeData with param = ${param}`).pipe(first());
  }
}

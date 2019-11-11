import {Component, OnInit} from '@angular/core';
import {mergeMap} from "rxjs/operators";
import {FakeRestServiceService} from "../services/fake-rest-service.service";

@Component({
  selector: 'app-subscribe-chain-ok',
  templateUrl: './subscribe-chain-ok.component.html',
  styleUrls: ['./subscribe-chain-ok.component.scss']
})
export class SubscribeChainOKComponent implements OnInit {
  public recievedData: string;

  constructor(private fakeRestService: FakeRestServiceService) {
  }

  ngOnInit() {
    this.fakeRestService.getParam().pipe(
      mergeMap((param: string) => this.fakeRestService.getStringDataWithParam(param))
    ).subscribe((dataWithParam: string) => {
      this.recievedData = dataWithParam;
      console.log(dataWithParam);
    });
  }

}

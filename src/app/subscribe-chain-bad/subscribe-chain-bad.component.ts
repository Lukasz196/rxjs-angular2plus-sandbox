import {Component, OnInit} from '@angular/core';
import {FakeRestServiceService} from "../services/fake-rest-service.service";

@Component({
  selector: 'app-subscribe-chain-bad',
  templateUrl: './subscribe-chain-bad.component.html',
  styleUrls: ['./subscribe-chain-bad.component.scss']
})
export class SubscribeChainBadComponent implements OnInit {

  public recievedData: string;

  constructor(private fakeRestService: FakeRestServiceService) {
  }

  ngOnInit() {
    this.fakeRestService.getParam().subscribe((param: string) => {
      this.fakeRestService.getStringDataWithParam(param).subscribe((dataWithParam: string) => {
        this.recievedData = dataWithParam;
        console.log(dataWithParam);
      })
    });
  }

}

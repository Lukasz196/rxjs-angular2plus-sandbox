import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubscribeChainBadComponent} from './subscribe-chain-bad.component';

describe('SubscribeChainBadComponent', () => {
  let component: SubscribeChainBadComponent;
  let fixture: ComponentFixture<SubscribeChainBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeChainBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeChainBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

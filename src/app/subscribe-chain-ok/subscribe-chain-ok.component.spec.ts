import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubscribeChainOKComponent} from './subscribe-chain-ok.component';

describe('SubscribeChainOKComponent', () => {
  let component: SubscribeChainOKComponent;
  let fixture: ComponentFixture<SubscribeChainOKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeChainOKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeChainOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

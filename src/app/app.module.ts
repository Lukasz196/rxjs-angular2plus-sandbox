import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SubscribeChainOKComponent} from './subscribe-chain-ok/subscribe-chain-ok.component';
import {FormsModule} from "@angular/forms";
import {SubscribeChainBadComponent} from './subscribe-chain-bad/subscribe-chain-bad.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SubscribeChainOKComponent,
    SubscribeChainBadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

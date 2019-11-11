import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubscribeChainOKComponent} from "./subscribe-chain-ok/subscribe-chain-ok.component";


const routes: Routes = [
  {path: 'chain', component: SubscribeChainOKComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilialsucheComponent} from './filialsuche/filialsuche.component';
import {TerminauswahlComponent} from './terminauswahl/terminauswahl.component';
import {FehlerseiteComponent} from './fehlerseite/fehlerseite.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BestaetigungComponent} from './bestaetigung/bestaetigung.component';
import {store} from "./store";

@NgModule({
  declarations: [
    AppComponent,
    FilialsucheComponent,
    TerminauswahlComponent,
    FehlerseiteComponent,
    BestaetigungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(httpClient: HttpClient) {
    httpClient.get("dtvifa/context", {responseType: "json"}).subscribe((context) => {
      store.context = context;
    });
  }

}

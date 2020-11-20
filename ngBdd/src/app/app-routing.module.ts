import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilialsucheComponent} from "./filialsuche/filialsuche.component";
import {TerminauswahlComponent} from "./terminauswahl/terminauswahl.component";
import {FehlerseiteComponent} from "./fehlerseite/fehlerseite.component";
import {BestaetigungComponent} from "./bestaetigung/bestaetigung.component";

const routes: Routes = [
  {path: "filialsuche", component: FilialsucheComponent},
  {path: "terminauswahl", component: TerminauswahlComponent},
  {path: "fehlerseite", component: FehlerseiteComponent},
  {path: "bestaetigung", component: BestaetigungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

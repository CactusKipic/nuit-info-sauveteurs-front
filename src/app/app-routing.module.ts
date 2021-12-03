import {RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {NgModule} from "@angular/core";
import {SauvetagesComponent} from "./sauvetages/sauvetages.component";
import {SauvesComponent} from "./sauves/sauves.component";
import {SauveteursComponent} from "./sauveteurs/sauveteurs.component";
import {SauvetageComponent} from "./sauvetages/sauvetage/sauvetage.component";
import {SauveComponent} from "./sauves/sauve/sauve.component";
import {SauveteurComponent} from "./sauveteurs/sauveteur/sauveteur.component";
import {ContribuerComponent} from "./contribuer/contribuer.component";


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'sauvetages', component: SauvetagesComponent},
  {path: 'sauvetages/detail/:id', component: SauvetageComponent},
  {path: 'sauves', component: SauvesComponent},
  {path: 'sauves/detail/:id', component: SauveComponent},
  {path: 'sauveteurs', component: SauveteursComponent},
  {path: 'sauveteurs/detail/:id', component: SauveteurComponent},
  {path: 'contribuer', component: ContribuerComponent},
  {path: '**', redirectTo: 'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

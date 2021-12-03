import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {AppRoutingModule} from "./app-routing.module";
import {DatePipe} from "@angular/common";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ButtonModule} from "primeng/button";
import { SauvetagesComponent } from './sauvetages/sauvetages.component';
import { SauveteursComponent } from './sauveteurs/sauveteurs.component';
import { SauvesComponent } from './sauves/sauves.component';
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SauvetageComponent } from './sauvetages/sauvetage/sauvetage.component';
import { SauveComponent } from './sauves/sauve/sauve.component';
import { SauveteurComponent } from './sauveteurs/sauveteur/sauveteur.component';
import {ToggleButtonModule} from "primeng/togglebutton";
import { ContribuerComponent } from './contribuer/contribuer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavBarComponent,
    SauvetagesComponent,
    SauveteursComponent,
    SauvesComponent,
    SauvetageComponent,
    SauveComponent,
    SauveteurComponent,
    ContribuerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        InputTextModule,
        TableModule,
        HttpClientModule,
        FormsModule,
        ToggleButtonModule,
    ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

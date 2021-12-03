import { Component, OnInit } from '@angular/core';
import {Sauvetage} from "../outils/modeles/sauvetage";
import {Sauveteur} from "../outils/modeles/sauveteur";
import {Sauve} from "../outils/modeles/sauve";
import {DatePipe} from "@angular/common";
import {DataCoreService} from "../outils/data-core.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contribuer',
  templateUrl: './contribuer.component.html',
  styleUrls: ['./contribuer.component.css']
})
export class ContribuerComponent implements OnInit {


  public sauvetage: Sauvetage = new Sauvetage(new Date(), "", "", "", false);
  public sauveteurs: Sauveteur[] = [];
  public sauves: Sauve[] = [];

  constructor(private _datePipe: DatePipe, private _dataCore: DataCoreService, private _router: Router) { }

  public addSauve() {
    this.sauves.push(new Sauve(false))
  }

  public removeSauve() {
    this.sauves.pop();
  }

  public addSauveteur() {
    this.sauveteurs.push(new Sauveteur("", false))
  }

  public removeSauveteur() {
    this.sauveteurs.pop();
  }

  public sauvegarder() {
    this._dataCore.saveSauvetage(this.sauvetage)
      .then(sauvetage => {
        this.sauves.forEach(s => {
          this._dataCore.saveSauve(s)
            .then(sauve => this._dataCore.addSauveToSauvetage(<Sauve>sauve, <Sauvetage>sauvetage))
        });
        this.sauveteurs.forEach(s => {
          this._dataCore.saveSauveteur(s)
            .then(sauveteur => this._dataCore.addSauveteurToSauvetage(<Sauveteur>sauveteur, <Sauvetage>sauvetage))
        });
      })
      .finally(() =>
        this._router.navigate([`../sauvetages`]))
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataCoreService} from "../../outils/data-core.service";
import {Sauvetage} from "../../outils/modeles/sauvetage";
import {Sauve} from "../../outils/modeles/sauve";
import {Sauveteur} from "../../outils/modeles/sauveteur";

@Component({
  selector: 'app-sauvetage',
  templateUrl: './sauvetage.component.html',
  styleUrls: ['./sauvetage.component.css']
})
export class SauvetageComponent implements OnInit {

  private id: number;
  public sauvetage: Sauvetage | undefined;
  public sauves: Sauve[] | undefined;
  public sauveteurs: Sauveteur[] | undefined;
  public edition: boolean = false;
  public key: string = "";

  constructor(private _route: ActivatedRoute, private _datacore: DataCoreService, private _router: Router) {
    this.id = parseInt(<string>this._route.snapshot.paramMap.get("id"));
    this._datacore.requestSauvetageById(this.id)
      .then(s => this.sauvetage = s);
    this._datacore.requestSauvesBySauvetage(this.id)
      .then(s => this.sauves = s)
    this._datacore.requestSauveteursBySauvetage(this.id)
      .then(s => this.sauveteurs = s)
  }

  public onSauveteurClick(sauveteur: Sauveteur){
    this._router.navigate([`../sauveteurs/detail/${sauveteur.id}`])
  }

  public onSauveClick(sauve: Sauve){
    this._router.navigate([`../sauves/detail/${sauve.id}`])
  }

  ngOnInit(): void {
  }

  sauvegarder() {
    if(this.key.length==0)
      this._datacore.saveSauvetage(<Sauvetage>this.sauvetage)
        .then(s => this.sauvetage = s)
        .finally(()=>this.edition = false);
    else
      this._datacore.saveSauvetage(<Sauvetage>this.sauvetage, this.key)
        .then(s => this.sauvetage = s)
        .finally(()=>{
          this.edition = false
          this.key = "";
        });
  }
}

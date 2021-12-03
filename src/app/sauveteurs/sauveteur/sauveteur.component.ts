import { Component, OnInit } from '@angular/core';
import {Sauvetage} from "../../outils/modeles/sauvetage";
import {ActivatedRoute, Router} from "@angular/router";
import {DataCoreService} from "../../outils/data-core.service";
import {Sauveteur} from "../../outils/modeles/sauveteur";

@Component({
  selector: 'app-sauveteur',
  templateUrl: './sauveteur.component.html',
  styleUrls: ['./sauveteur.component.css']
})
export class SauveteurComponent implements OnInit {

  private id: number;
  public sauveteur: Sauveteur | undefined;
  public sauvetages: Sauvetage[] | undefined;
  public edition: boolean = false;
  public key: string = "";

  constructor(private _route: ActivatedRoute, private _datacore: DataCoreService, private _router: Router) {
    this.id = parseInt(<string>this._route.snapshot.paramMap.get("id"));
    this._datacore.requestSauveteurById(this.id)
      .then(s => this.sauveteur = s)
    this._datacore.requestSauvetagesBySauve(this.id)
      .then(s => this.sauvetages = s)
  }



  onSauvetageClick(sauvetage: Sauvetage) {
    this._router.navigate([`../sauvetages/detail/${sauvetage.id}`])
  }

  ngOnInit(): void {
  }

  sauvegarder() {
    if(this.key.length==0)
      this._datacore.saveSauveteur(<Sauveteur>this.sauveteur)
        .then(s => this.sauveteur = s)
        .finally(()=>this.edition = false);
    else
      this._datacore.saveSauveteur(<Sauveteur>this.sauveteur, this.key)
        .then(s => this.sauveteur = s)
        .finally(()=>{
          this.edition = false
          this.key = "";
        });
  }
}

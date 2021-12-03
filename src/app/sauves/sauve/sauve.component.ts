import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataCoreService} from "../../outils/data-core.service";
import {Sauve} from "../../outils/modeles/sauve";
import {Sauvetage} from "../../outils/modeles/sauvetage";

@Component({
  selector: 'app-sauve',
  templateUrl: './sauve.component.html',
  styleUrls: ['./sauve.component.css']
})
export class SauveComponent implements OnInit {

  private id: number;
  public sauve: Sauve | undefined;
  public sauvetages: Sauvetage[] | undefined;
  public edition: boolean = false;
  public key: string = "";

  constructor(private _route: ActivatedRoute, private _datacore: DataCoreService, private _router: Router) {
    this.id = parseInt(<string>this._route.snapshot.paramMap.get("id"));
    this._datacore.requestSauveById(this.id)
      .then(s => this.sauve = s)
    this._datacore.requestSauvetagesBySauve(this.id)
      .then(s => this.sauvetages = s)
  }

  ngOnInit(): void {
  }

  onSauvetageClick(sauvetage: Sauvetage) {
    this._router.navigate([`../sauvetages/detail/${sauvetage.id}`])
  }

  sauvegarder() {
    if(this.key.length==0)
      this._datacore.saveSauve(<Sauve>this.sauve)
        .then(s => this.sauve = s)
        .finally(()=>this.edition = false);
    else
      this._datacore.saveSauve(<Sauve>this.sauve, this.key)
        .then(s => this.sauve = s)
        .finally(()=>{
          this.edition = false
          this.key = "";
        });
  }
}

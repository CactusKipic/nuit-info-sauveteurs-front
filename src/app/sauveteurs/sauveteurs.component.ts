import { Component, OnInit } from '@angular/core';
import {DataCoreService} from "../outils/data-core.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sauveteur} from "../outils/modeles/sauveteur";
import {Sauve} from "../outils/modeles/sauve";

@Component({
  selector: 'app-sauveteurs',
  templateUrl: './sauveteurs.component.html',
  styleUrls: ['./sauveteurs.component.css']
})
export class SauveteursComponent implements OnInit {

  public searchName: string = "";
  public listSauveteurs: Sauveteur[] | undefined;

  constructor(private _datacore: DataCoreService, private _router: Router) {
    this._datacore.requestAllSauveteurs()
      .then(s => this.listSauveteurs = s)
  }

  public onSearch(){
    if(this.searchName.length > 0) {
      this._datacore.requestAllSauveteursByName(this.searchName)
        .then(s => this.listSauveteurs = s);
    } else
      this._datacore.requestAllSauveteurs()
        .then(s => this.listSauveteurs = s);
  }

  public onSauveteurClick(sauveteur: Sauveteur){
    this._router.navigate([`../sauveteurs/detail/${sauveteur.id}`])
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {DataCoreService} from "../outils/data-core.service";
import {Sauve} from "../outils/modeles/sauve";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sauves',
  templateUrl: './sauves.component.html',
  styleUrls: ['./sauves.component.css']
})
export class SauvesComponent implements OnInit {

  public listSauves: Sauve[] | undefined;

  public searchName: string = "";

  constructor(private _datacore: DataCoreService, private _router: Router, private _route: ActivatedRoute) {
    this._datacore.requestAllSauves()
      .then(s => this.listSauves = s);
  }

  public onSearch(){
    if(this.searchName.length > 0) {
      this._datacore.requestAllSauvesByName(this.searchName)
        .then(s => this.listSauves = s);
    } else
      this._datacore.requestAllSauves()
        .then(s => this.listSauves = s);
  }

  public onSauveClick(sauve: Sauve){
    this._router.navigate([`../sauves/detail/${sauve.id}`])
  }

  ngOnInit(): void {
  }

}

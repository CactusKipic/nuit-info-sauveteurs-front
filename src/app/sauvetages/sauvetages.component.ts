import { Component, OnInit } from '@angular/core';
import {Sauvetage} from "../outils/modeles/sauvetage";
import {DataCoreService} from "../outils/data-core.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sauvetages',
  templateUrl: './sauvetages.component.html',
  styleUrls: ['./sauvetages.component.css']
})
export class SauvetagesComponent implements OnInit {

  public listSauvetages: Sauvetage[] | undefined;

  public searchName: string = "";
  public searchStartDate: Date | undefined;
  public searchEndDate: Date | undefined;

  constructor(private _datacore: DataCoreService, private _router: Router, private _route: ActivatedRoute) {
    this._datacore.requestAllSauvetages()
      .then(s => this.listSauvetages = s);

  }

  public onSearch() {
    console.log("search:",this.searchName)
    if(this.searchName.length > 0) {
      if(this.searchStartDate != undefined && this.searchEndDate != undefined) {
        this.listSauvetages = undefined;
        this._datacore.requestAllSauvetagesByDateAndName(this.searchStartDate, this.searchEndDate, this.searchName)
          .then(s => this.listSauvetages = s);
      } else {
        this.listSauvetages = undefined;
        this._datacore.requestAllSauvetagesByName(this.searchName)
          .then(s => this.listSauvetages = s);
      }
    } else {
      if(this.searchStartDate != undefined && this.searchEndDate != undefined) {
        this.listSauvetages = undefined;
        this._datacore.requestAllSauvetagesByDate(this.searchStartDate, this.searchEndDate)
          .then(s => this.listSauvetages = s);
      } else {
        this._datacore.requestAllSauvetages()
          .then(s => this.listSauvetages = s)
      }
    }
  }

  public delDate() {
    this.searchStartDate = undefined;
    this.searchEndDate = undefined;
  }

  public onSauvetageClick(sauvetage: Sauvetage) {
    this._router.navigate([`../sauvetages/detail/${sauvetage.id}`])
  }


  ngOnInit(): void {
  }

}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Sauvetage} from "./modeles/sauvetage";
import {Sauve} from "./modeles/sauve";
import {Sauveteur} from "./modeles/sauveteur";

@Injectable({
  providedIn: 'root'
})
export class DataCoreService {

  private urlAPI: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {

  }

  /*
    SAUVETAGES
   */

  public async saveSauvetage(sauvetage: Sauvetage, key?: string): Promise<Sauvetage | undefined> {
    let url = this.urlAPI + 'sauvetage/save'+ (key !=undefined ? "?adminkey="+key : "");
    return await this.http.post<Sauvetage>(url, sauvetage).toPromise();
  }

  public async requestAllSauvetages(): Promise<Sauvetage[]> {
    let url = this.urlAPI + 'sauvetage/getall';
    return <Sauvetage[]> await this.http.get<Sauvetage[]>(url).toPromise();
  }

  public async requestSauvesBySauvetage(id: number): Promise<Sauve[]> {
    let url = this.urlAPI + 'sauvetage/getsauve?idsauvetage=' + id;
    return <Sauve[]> await this.http.get<Sauve[]>(url).toPromise();
  }

  public async requestSauveteursBySauvetage(id: number): Promise<Sauveteur[]> {
    let url = this.urlAPI + 'sauvetage/getsauveteur?idsauvetage=' + id;
    return <Sauveteur[]> await this.http.get<Sauveteur[]>(url).toPromise();
  }

  public async requestSauvetageById(id: number): Promise<Sauvetage> {
    let url = this.urlAPI + 'sauvetage/get?idsauvetage=' + id;
    return <Sauvetage> await this.http.get<Sauvetage>(url).toPromise();
  }

  public async requestAllSauvetagesByName(value: string): Promise<Sauvetage[]> {
    let url = this.urlAPI + 'sauvetage/search?name=' + value;
    return <Sauvetage[]> await this.http.get<Sauvetage[]>(url).toPromise();
  }

  public async requestAllSauvetagesByDate(start: Date, end: Date): Promise<Sauvetage[]> {
    let url = this.urlAPI + 'sauvetage/search?startdate=' + start + '&enddate=' + end;
    return <Sauvetage[]> await this.http.get<Sauvetage[]>(url).toPromise();
  }

  public async requestAllSauvetagesByDateAndName(start: Date, end: Date, value: string): Promise<Sauvetage[]> {
    let url = this.urlAPI + 'sauvetage/search?startdate=' + start + '&enddate=' + end + '&name=' + value;
    return <Sauvetage[]> await this.http.get<Sauvetage[]>(url).toPromise();
  }

  /*
    SAUVES
   */

  public async saveSauve(sauve: Sauve, key?: string): Promise<Sauve | undefined> {
    let url = this.urlAPI + 'sauve/save'+ (key !=undefined ? "?adminkey="+key : "");
    return await this.http.post<Sauve>(url, sauve).toPromise();
  }

  public async addSauveToSauvetage(sauve: Sauve, sauvetage: Sauvetage): Promise<void> {
    let url = this.urlAPI + 'sauveteur/addsauvetage?idsauve='+sauve.id+"&idsauvetage="+sauvetage.id;
    return <void> await this.http.get(url).toPromise();
  }

  public async requestAllSauves(): Promise<Sauve[]> {
    let url = this.urlAPI + 'sauve/getall';
    return <Sauve[]> await this.http.get<Sauve[]>(url).toPromise();
  }

  public async requestSauvetagesBySauve(id: number): Promise<Sauvetage[]> {
    let url = this.urlAPI + 'sauve/sauvetage?idsauve=' + id;
    return <Sauvetage[]> await this.http.get<Sauvetage[]>(url).toPromise();
  }

  public async requestSauveById(id: number): Promise<Sauve> {
    let url = this.urlAPI + 'sauve/get?idsauve=' + id;
    return <Sauve> await this.http.get<Sauve>(url).toPromise();
  }

  public async requestAllSauvesByName(value: string): Promise<Sauve[]> {
    let url = this.urlAPI + 'sauve/search?name=' + value;
    return <Sauve[]> await this.http.get<Sauve[]>(url).toPromise();
  }

  /*
    SAUVETEURS
   */

  public async saveSauveteur(sauveteur: Sauveteur, key?: string): Promise<Sauveteur | undefined> {
    let url = this.urlAPI + 'sauveteur/save'+ (key !=undefined ? "?adminkey="+key : "");
    return await this.http.post<Sauveteur>(url, sauveteur).toPromise();
  }

  public async addSauveteurToSauvetage(sauveteur: Sauveteur, sauvetage: Sauvetage): Promise<void> {
    let url = this.urlAPI + 'sauveteur/addsauvetage?idsauveteur='+sauveteur.id+"&idsauvetage="+sauvetage.id;
    return <void> await this.http.get(url).toPromise();
  }

  public async requestAllSauveteurs(): Promise<Sauveteur[]> {
    let url = this.urlAPI + 'sauveteur/getall';
    return <Sauveteur[]> await this.http.get<Sauveteur[]>(url).toPromise();
  }

  public async requestSauvetageBySauveteur(id: number): Promise<Sauvetage> {
    let url = this.urlAPI + 'sauveteur/sauvetage?idsauveteur=' + id;
    return <Sauvetage> await this.http.get<Sauvetage>(url).toPromise();
  }

  public async requestSauveteurById(id: number): Promise<Sauveteur> {
    let url = this.urlAPI + 'sauveteur/get?idsauveteur=' + id;
    return <Sauveteur> await this.http.get<Sauveteur>(url).toPromise();
  }

  public async requestAllSauveteursByName(value: string): Promise<Sauveteur[]> {
    let url = this.urlAPI + 'sauveteur/search?name=' + value;
    return <Sauveteur[]> await this.http.get<Sauveteur[]>(url).toPromise();
  }




}

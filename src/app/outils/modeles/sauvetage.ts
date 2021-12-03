export class Sauvetage {

  constructor(private _date: Date, private _nom: string, private _description: string, private _source: string, private _valide: boolean, private _id?: number) {
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get source(): string {
    return this._source;
  }

  set source(value: string) {
    this._source = value;
  }

  get valide(): boolean {
    return this._valide;
  }

  set valide(value: boolean) {
    this._valide = value;
  }

  get id(): number | undefined {
    return this._id;
  }
}

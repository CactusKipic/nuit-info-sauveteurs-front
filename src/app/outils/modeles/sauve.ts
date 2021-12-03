export class Sauve {

  constructor(private _valide: boolean, private _nom?: string, private _prenom?: string, private _id?: number) {
  }

  get valide(): boolean {
    return this._valide;
  }

  set valide(value: boolean) {
    this._valide = value;
  }

  get id(): number | undefined{
    return this._id;
  }

  get nom(): string | undefined{
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  get prenom(): string  | undefined{
    return this._prenom;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }
}

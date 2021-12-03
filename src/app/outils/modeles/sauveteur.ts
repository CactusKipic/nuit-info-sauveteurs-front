export class Sauveteur {

  constructor(private _biographie: string, private _valide: boolean, private _id?: number, private _nom?: string, private _prenom?: string) {
  }

  get biographie(): string {
    return this._biographie;
  }

  set biographie(value: string) {
    this._biographie = value;
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

  set id(value: number | undefined) {
    this._id = value;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  get prenom(): string | undefined {
    return this._prenom;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }
}

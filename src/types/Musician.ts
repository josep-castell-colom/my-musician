export default interface Musician {
  id: number;
  name: string;
  lastname: string;
  age: number;
  instrument: string;
  rol: Array<string>;
  description: string;
  imgName: string;
  patrons: Array<number>;
  email: string;
  password: string;
}

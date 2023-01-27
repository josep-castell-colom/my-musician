export default interface Musician {
  id: number;
  name: string;
  lastname: string;
  age: number;
  instrument: string;
  description: string;
  imgName: string;
  patrons: Array<number>;
}

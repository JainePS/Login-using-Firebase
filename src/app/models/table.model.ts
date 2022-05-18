export class TableModel {
  id?: string;
  nome!: string;
  ocupada!: boolean;
  lugares!: number;

  constructor() {
    this.id = '';
    this.nome = '';
    this.ocupada = false;
    this.lugares = 0;
  }
}


  // constructor(
  //   nome: string,
  //   ocupada: boolean,
  //   lugares: number,
  // ) {
  //   this.nome = nome;
  //   this.ocupada = ocupada;
  //   this.lugares = lugares;
  // }
// }

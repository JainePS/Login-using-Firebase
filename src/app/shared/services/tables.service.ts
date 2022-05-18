import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableModel } from 'src/app/models/table.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TablesService {
  private url = 'https://mapa-mesas-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  createTable(table: TableModel) {
    return this.http.post(`${this.url}/tables.json`, table).pipe(
      map((result: any) => {
        console.log(result);
        table.id = result.name;
        
        this.updateTable(table).subscribe( x => x);

        return table;
      })
    );
  }

  updateTable(table: TableModel){
    const tableTemplate = {
      ...table
    }

    return this.http.put(`${this.url}/tables/${table.id}.json`, tableTemplate)
  }

  getTable(id: any) {
    return this.http.get(`${this.url}/tables/${id}.json`);
  }
  
  getTables(){
    return this.http.get(
      `${this.url}/tables.json`).pipe(
        map(this.createArrays)
      )
  }

  private createArrays(tablesObj: object) {
    const tables: TableModel[] = [];
    console.log(tablesObj);

    if (tablesObj === null) {
      return [];
    }

    Object.keys(tablesObj).forEach((key) => {
      const table = JSON.parse(
        JSON.stringify(tablesObj[key as keyof Object])
      ) as TableModel;
      table.id = key;   

      tables.push(table);
    });

    console.log(tables);

    return tables;
  }

  deleteTable(id: any){
    console.log('apagado');
    return this.http.delete(`${this.url}/tables/${id}.json`)
 
  
  }


}

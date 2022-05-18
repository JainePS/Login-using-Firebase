import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { TableModel } from '../../models/table.model';
import { TablesService } from '../../shared/services/tables.service';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  tables: TableModel[]=[];

  constructor(public authService: AuthService,
              private tablesService: TablesService) {}
  ngOnInit(): void {
    this.tablesService.getTables().subscribe( result =>{
      this.tables = result
    })
  }

  deleteTable(table:  TableModel, i: number){

    Swal.fire({
      title: `Você tem certeza que deseja deletar a mesa ${table.nome}?`,
      text: "Não será possivel reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tables.splice(i,1)
        console.log(table.id);        
        this.tablesService.deleteTable(table.id).subscribe()
        Swal.fire(
          'Apagada!',
          'Sua mesa foi deletada.',
          'success'
        )
      }
    })



    
    
  }
}
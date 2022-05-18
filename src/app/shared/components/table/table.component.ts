import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TableModel } from 'src/app/models/table.model';
import { TablesService } from '../../services/tables.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  table = new TableModel();

  constructor(
    private tablesService: TablesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 'new') {
      this.tablesService.getTable(id).subscribe((table: any) => {
        this.table = JSON.parse(JSON.stringify(table)) as TableModel;

        console.log(table);
        

        this.table.id = id ?? '';
      });
    }
  }

  allAboutTable(form: NgForm): void {
    if (form.invalid) {
      console.log('Formulário inválido');
      return;
    }

    let petition: Observable<any>;

    if (this.table.id) {
      petition = this.tablesService.updateTable(this.table);
    } else {
      petition = this.tablesService.createTable(this.table);
    }
    petition.subscribe((result) => {
      Swal.fire({
        title: this.table.nome,
        text: 'Atualização correta',
        icon: 'success',
      });
    });
  }
}

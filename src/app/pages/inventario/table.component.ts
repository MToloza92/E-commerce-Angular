import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Producto } from 'src/app/shared/interfaces/productoInterface';
import { PRODUCTOS_MOCK } from 'src/app/shared/mocks/productos.mock';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss"
})
export class TableComponent implements AfterViewInit {

  columnas: string[] = ['id', 'nombre', 'precio', 'cantidad', 'categoria', 'fechaIngreso'];
  dataSource = new MatTableDataSource<Producto>(PRODUCTOS_MOCK);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

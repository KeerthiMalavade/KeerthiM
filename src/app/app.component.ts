import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { EmployeServiceService } from './employe-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = [
    'id',
     'FirstName',
      'lastName', 
      'Dob',
      'email',
     'education',
     'gender',
     'company',
     'currentpackage',
    'Action'];
  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

constructor(private dialog:MatDialog,private employe:EmployeServiceService){

this.employe.getAllData(employe).subscribe({
  next:(result)=>{
    this.dataSource=new MatTableDataSource(result);
    this.dataSource.sort=this.sort,
    this.dataSource.paginator=this.paginator
  },
  error:(err)=>{
console.log(err)
  }
})

}

AddRecord(){
  this.dialog.open(EmpolyeeComponent)
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}

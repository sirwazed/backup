import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crudApp';
  displayedColumns: string[] = ['productName', 'category','date', 'freshness', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthService, private router: Router){

  }
  ngOnInit(): void {
    if(!this.authUser()){
      this.router.navigate(['/login']);
    }
    else{
      this.dashboard = true;
      this.login = false;
    }
    this.getAllProduct();
  }

  dashboard = false;
  login = true;

  authUser(): boolean{
    if(this.auth.isAuthenticated){
      console.log(this.auth.isAuthenticated);
      return true;
    }
    else{
      return false;
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
     width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'Save') this.getAllProduct();
    });
  }
  getAllProduct(){
    this.api.getProduct().subscribe({
      next:(res:any)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=>{
        alert("Error while fetching the record");
      }
    })
  }
  editProduct(row:any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val === 'Update') this.getAllProduct();
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteProduct(id: number){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        this.getAllProduct();
      },error:(err)=>{
        alert(err);
      }
    })
  }
}

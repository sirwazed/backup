import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  constructor(private api: ApiService, private router: Router) { }
  async authenticate(data: any, path: String): Promise<boolean>{
    await this.api.getUser().subscribe({
      next:(res:any)=>{
        if(res.email == data.email && res.pass == data.pass){
          this.isAuthenticated = true;
          this.router.navigate([path]);
        }
        console.log(res);
        console.log(this.isAuthenticated);
      },error:(err:any)=>{
        console.log(err);
      }
    });
    if(this.isAuthenticated==true) return true;
    return false;
  }
}

import { UserAuthService } from './user-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:4000/users"
  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  })
  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData:any){
    return this.http.post(this.url+'/authenticate', loginData, {headers: this.requestHeader});
  }

  public forAdmin(){
    return this.http.get(this.url+'/');
  }

  public roleMatch(AllowedRole: any): boolean{
    let isMatch = false;
    const userRoles:any = this.userAuthService.getRoles();
    if(userRoles != null && userRoles){
      for(let i=0;i<userRoles.length;i++){
        for(let j=0;j<AllowedRole.length; j++){
          if(userRoles[i]===AllowedRole[j]){
            isMatch = true;
          }
        }
      }
    }
    return isMatch;
  }
}

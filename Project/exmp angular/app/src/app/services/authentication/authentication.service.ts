import { SignInData } from './../../models/signInData';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockData = new SignInData('hasan@gmail.com','12345');
  isAuthenticated = false;

  constructor(private router: Router) { }
  authenticate(signInData: SignInData): boolean {
    if(this.checkCredential(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;
    }
  }

  private checkCredential(data: SignInData): boolean{
    return this.checkEmail(data.getEmail()) && this.checkPassword(data.getPassword());
  }
  private checkEmail(email: String):boolean{
    return email == this.mockData.getEmail();
  }
  
  private checkPassword(pass: String):boolean{
    return pass == this.mockData.getPassword();
  }

  logOut(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}

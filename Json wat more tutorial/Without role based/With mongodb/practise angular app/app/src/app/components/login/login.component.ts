import { UserAuthService } from './../../services/user-auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, 
    private userAuthService: UserAuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm){
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe((response:any)=>{
      console.log(response.token, response.role);
      this.userAuthService.setRoles(response.role);
      this.userAuthService.setToken(response.token);

      const role = response.role;
      if(role === 'Admin'){
        this.router.navigate(["/admin"]);
      }
      else{
        this.router.navigate(["/user"]);
      }

    },
    (err)=>{
      console.log(err);
    }
    )
  }

}

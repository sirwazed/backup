import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
    private Router: Router,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logOut(){
    this.userAuthService.clear();
    this.Router.navigate(['/home']);
  }

  public roleMatch(roles:any): boolean{
    return this.userService.roleMatch(roles);
  }

}

import { AuthenticationService } from './services/authentication/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(public authenticationService: AuthenticationService){

  };
  logOut(){
    this.authenticationService.logOut();
  }
}

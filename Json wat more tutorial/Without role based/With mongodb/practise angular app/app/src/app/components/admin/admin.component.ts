import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private UserService: UserService) { }
  message: any;

  ngOnInit(): void {
    this.forAdmin();
  }

  forAdmin(){
    this.UserService.forAdmin().subscribe((res)=>{
      console.log(res);
      this.message = (res);
    },
    (err)=>{
      console.log(err);
    }
    )
  }
}

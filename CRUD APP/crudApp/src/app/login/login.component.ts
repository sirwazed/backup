import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }
  loginForm !: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      pass: ['',Validators.required]
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.auth.authenticate(this.loginForm.value, '/');
  }

}

import { HttpService } from './service/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  temp = '';

  jsonValue = {
    a: 'hello',
    b: 'world'
  }
  user = {
    name: 'John',
    age: '32',
    id: 0,
    isColored: true,
  }
  newDate = new Date;
  isColored: boolean;

  constructor(private httpService: HttpService){
    this.isColored = this.user.isColored;

  }
  showUser(user: any) {
    console.log(user);
  }

  handleEvent(){
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log(response);
    })
    
  }
  updateTitle(){
    this.title=this.temp;
  }
}


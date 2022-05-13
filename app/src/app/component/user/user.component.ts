import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface {
  name: string;
  age: string;
  id: number;
  isColored: boolean;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isColored: boolean = false;

  @Input() user: UserInterface;
  @Output() UserEvent: EventEmitter<UserInterface>;

  constructor() { 
    this.user = {} as UserInterface;
    this.UserEvent = new EventEmitter<UserInterface>();
    //this.isColored = this.user.isColored;
  }

  ngOnInit(): void {
    this.isColored = this.user.isColored;
  }

  sendUserEvent(): void {
    this.UserEvent.emit(this.user);
  }

}

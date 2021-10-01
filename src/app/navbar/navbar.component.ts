import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Output() result: EventEmitter<string[]> = new EventEmitter;

  userInput: string = '';
  history: string[] = []; //used to store history


  //will be used to do something whenever the search button is clicked.
  onSearch(){
    this.history.push(this.userInput);
    this.result.emit(this.history);
  }


}

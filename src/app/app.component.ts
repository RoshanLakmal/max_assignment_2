import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowReset = false;
  username = "";
  usernameValue = "";

  constructor(){
  
  }
  
  onUpdateInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username != ""){
      this.allowReset = true;
    }
  }
  onReset() {
    this.username = "";
    this.usernameValue = "";
  }
}

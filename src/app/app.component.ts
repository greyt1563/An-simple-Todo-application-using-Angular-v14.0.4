import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-manager by shuvojit';
  constructor(){
    // setTimeout(() => {
    //   this.title ="Hello Title changed";
    // }, 2000);
  }
  
}

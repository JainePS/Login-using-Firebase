import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapa-mesas';

  @Input() isShowing: boolean;

  constructor(){
    this.isShowing = false;
  }

  

  sideBarToggler( isShowing: any ) {
    console.log('olá');
    
    this.isShowing = !this.isShowing;
  }

}

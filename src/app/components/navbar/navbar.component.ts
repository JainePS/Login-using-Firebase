import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isShowing: boolean;
  @Output() toggleSidebarForMe: EventEmitter<any>;

  constructor(private router: Router, public authservice: AuthService) {
    this.isShowing = false;
    this.toggleSidebarForMe = new EventEmitter();
  }

  ngOnInit(): void {}

  toggleSidebar() {
    console.log(this.isShowing);
    
    console.log('olá daqui');

    if (!this.isShowing) {
      (this.isShowing = true);
    } else {
      (this.isShowing = false);
    }

    this.toggleSidebarForMe.emit(this.isShowing);
  }
  
  singOut() {
    return this.authservice.SignOut();
  }
}

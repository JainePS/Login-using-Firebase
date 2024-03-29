import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../shared/services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
  
  ) { }
  ngOnInit() { 
 
  }

  login(user: string, password: string) {
    const authResult: any = this.authService.SignIn(user, password);


    console.log('lucas', authResult);
    

    if (authResult) {
      // this.router.navigate(['/dashboard']);
    }

  }

  async loginWithGoogle() {
    try {
      const resp = await this.authService.GoogleAuth();

      const a = await this.router.navigate(['/dashboard']); 

      console.log(a);
      
    } catch (error) {
      
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion de devoirs à rendre (Assignments)';
   constructor(private authService:AuthService,private router:Router){}
   
   isAdmin(){
    //console.log("i'm here"+this.authService.loggedIn);
    if(!this.authService.loggedIn){
      this.authService.logIn();
    }else{
      this.authService.logOut();
      this.router.navigate(['/assignments'])
    }
   }
  login(){
      this.router.navigate(['/home'])
  }
}

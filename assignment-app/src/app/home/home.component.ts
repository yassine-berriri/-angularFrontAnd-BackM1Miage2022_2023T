import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  email !:String;
  password !:String;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  connection(){
    console.log("this.email",this.email);
    console.log("this.password",this.password);
    if(this.email=="admin" && this.password =="admin"){
      this.authService.logIn();
      this.router.navigate(['/assignments'])
    }
    else{
      alert("email ou mot de passe Incorrect ")
    }
  }

    




}

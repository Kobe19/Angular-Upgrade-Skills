import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isConnected = true;

  constructor(
    private authService: AuthentificationService,
    private myRoot: Router
  ) {}

  ngOnInit() {
    this.isConnected = this.authService.isAuthValid;
  }

  onSignIn() {
    this.authService.SignIn().then(() => {
      this.isConnected = this.authService.isAuthValid;
      this.myRoot.navigate(['appareils']);
      console.log(this.authService.isAuthValid);
    });
  }

  onSignOff() {
    this.authService.SignOut();
    this.isConnected = this.authService.isAuthValid;
  }

  // onFalse() {
  //   this.isTrue = false;
  // }

  // onTrue() {
  //   this.isTrue = true;
  // }
}

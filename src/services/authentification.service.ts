import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationService {
  isAuthValid = false;

  SignIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuthValid = true;
        resolve(true);
      }, 2000);
    });
  }

  SignOut() {
    this.isAuthValid = false;
  }
}

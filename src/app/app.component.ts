import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { AuthComponent } from '../auth/auth.component';
import { AppareilService } from '../services/appareil.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
}

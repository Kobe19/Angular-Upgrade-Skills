import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css'],
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  isTrue = true;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  Appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.Appareils = this.appareilService.Appareils;
  }

  onAllumer() {
    this.appareilService.SwitchOnAll();
  }

  onEteindre() {
    this.appareilService.SwitchOffAll();
  }


}

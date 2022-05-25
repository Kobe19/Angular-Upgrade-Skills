import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css'],
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareils name Here';
  status: string = 'Appareils status Here';
  constructor(
    private myAppareil: AppareilService,
    private myRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.myRoute.snapshot.params['id'];
    this.name = this.myAppareil.getAppareilsById(+id).name;
    this.status = this.myAppareil.getAppareilsById(+id).status;
  }
}

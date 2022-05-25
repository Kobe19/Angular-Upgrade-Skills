import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String;
  @Input() appareilStatus: String;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private serviceAppareil: AppareilService) {}

  ngOnInit() {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.serviceAppareil.SwitchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.serviceAppareil.SwitchOffOne(this.indexOfAppareil);
  }
}

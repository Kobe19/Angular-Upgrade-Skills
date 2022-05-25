import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {
  constructor() {}

  Appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Television',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint',
    },
  ];

  getAppareilsById(id: number) {
    const appareil = this.Appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return appareil;
  }

  SwitchOnAll() {
    for (let appareil of this.Appareils) {
      appareil.status = 'allumé';
    }
  }

  SwitchOffAll() {
    for (let appareil of this.Appareils) {
      appareil.status = 'éteint';
    }
  }

  SwitchOnOne(index: number) {
    this.Appareils[index].status = 'allumé';
  }

  SwitchOffOne(index: number) {
    this.Appareils[index].status = 'éteint';
  }
}

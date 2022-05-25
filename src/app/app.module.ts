import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppareilComponent } from '../appareil/appareil.component';
import { AppareilService } from '../services/appareil.service';
import { AppareilViewComponent } from '../appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AuthentificationService } from '../services/authentification.service';
import { SingleAppareilComponent } from '../single-appareil/single-appareil.component';
import { FourOhFourComponent } from '../four-oh-four/four-oh-four.component';
import { AuthGuardService } from '../services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'appareils',
    canActivate: [AuthGuardService],
    component: AppareilViewComponent,
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuardService],
    component: SingleAppareilComponent,
  },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AppareilService, AuthentificationService, AuthGuardService],
  declarations: [
    AppComponent,
    HelloComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

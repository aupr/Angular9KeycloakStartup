import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { initializer } from './utils/app-init';

import { AppComponent } from './app.component';
import {RoutingModule} from './routing.module';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import {RouterModule} from '@angular/router';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

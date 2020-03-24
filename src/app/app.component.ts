import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'myapp-for-update';
  userProfile: any;

  constructor(
    protected keycloakService: KeycloakService
  ) {
  }

  ngOnInit(): void {

    console.log('First Init');
    try {
      this.userProfile = this.keycloakService.getKeycloakInstance().profile;
      console.log(this.userProfile);
    } catch (e) {
      console.log('Failed to load user details', e);
    }

  }

  logout(): void {
    this.keycloakService.logout();
  }

}

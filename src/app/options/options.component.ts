import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(
    protected keycloakAngular: KeycloakService
  ) { }

  ngOnInit(): void {
    try {
      console.log("hello hello");
      const userDetails = this.keycloakAngular.getKeycloakInstance().token;
      console.log(userDetails);
    } catch (e) {
      console.log('Failed to load user details', e);
    }
  }

}

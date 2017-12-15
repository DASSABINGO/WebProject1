import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private auth: AuthService) { }

  userLoggedIn() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  onLogout() {
    this.auth.logout();
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}

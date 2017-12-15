import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  pwd: string;
  name: string;
  description: string;


  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd, this.name);
    console.log(this.email);
    console.log(this.pwd);
  }
}

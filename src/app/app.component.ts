import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyB2pst-1r_CBcb23RNNA9alKOaakNJgqLU",
      authDomain: "sampleauth-8c896.firebaseapp.com",
      databaseURL: "https://sampleauth-8c896.firebaseio.com",
      projectId: "sampleauth-8c896",
      storageBucket: "sampleauth-8c896.appspot.com",
      messagingSenderId: "662203786527"
    };
    firebase.initializeApp(firebaseConfig);
  }
}

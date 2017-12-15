import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotificationService } from './services/notification.service';
//import { AuthGuard } from './services/auth.guard';
//import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetRowComponent } from './bet-row/bet-row.component';
import { BetOddsComponent } from './bet-odds/bet-odds.component';
import { TwitterDisplayComponent } from './twitter-display/twitter-display.component';
import { BbcDisplayComponent } from './bbc-display/bbc-display.component';
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'twitter-display', component: TwitterDisplayComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BetListComponent,
    BetRowComponent,
    NavBarComponent,
    TwitterDisplayComponent,
    BbcDisplayComponent,
    BetOddsComponent,
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NotificationComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'sampleAuth'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

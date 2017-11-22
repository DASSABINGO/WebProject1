import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetRowComponent } from './bet-row/bet-row.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TwitterDisplayComponent } from './twitter-display/twitter-display.component';
import { BbcDisplayComponent } from './bbc-display/bbc-display.component';
import { BetOddsComponent } from './bet-odds/bet-odds.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BetListComponent,
    BetRowComponent,
    NavBarComponent,
    TwitterDisplayComponent,
    BbcDisplayComponent,
    BetOddsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

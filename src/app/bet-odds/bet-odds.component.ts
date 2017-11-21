import { Component, OnInit, Input } from '@angular/core';
import { ICompany } from './sites'
@Component({
  selector: 'app-bet-odds',
  templateUrl: './bet-odds.component.html',
  styleUrls: ['./bet-odds.component.css'],
  inputs: ['sites']
})
export class BetOddsComponent implements OnInit {

  constructor() { }
 sites: ICompany;

  companyArray: ICompany[] =
  [
    {
      "companyName": 'Ladbrokes',
      "oddsTeam1": 1.1,
      "oddsTeam2": 1.9
    },
    {
      "companyName": 'Paddy Power',
      "oddsTeam1": 1.1,
      "oddsTeam2": 1.9
    }
  ];



  ngOnInit() {
  }

}

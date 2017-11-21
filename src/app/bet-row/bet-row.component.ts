import { BetOddsComponent } from '../bet-odds/bet-odds.component';
import { Component, OnInit } from '@angular/core';
import { ITeams } from '../bet-row/teams'
import {ICompany} from '../bet-odds/sites'

@Component({
  selector: 'app-bet-row',
  templateUrl: './bet-row.component.html',
  styleUrls: ['./bet-row.component.css'],
})
export class BetRowComponent implements OnInit {

  constructor() { }
 company: ICompany[] =[ {
  "companyName": 'Ladbrokes',
  "oddsTeam1": 1.1,
  "oddsTeam2": 1.9
},
  {
    "companyName": 'Paddy Power',
    "oddsTeam1": 1.1,
    "oddsTeam2": 1.9
  }]
  team: ITeams[] =
  [
    
    {
      "team1": 'Everton',
      "team2": 'Liverpool',
      "startTime":'3:00pm',
      "sites" : [ {
        "companyName": 'Ladbrokes',
        "oddsTeam1": 1.1,
        "oddsTeam2": 1.9
      },
        {
          "companyName": 'Paddy Power',
          "oddsTeam1": 1.1,
          "oddsTeam2": 1.9
        }]
      
    },
    {
      "team1": 'Arsenal',
      "team2": 'Tottenham',
      "startTime":'5:00pm',
      "sites" : [ {
        "companyName": 'Ladbrokes',
        "oddsTeam1": 1.0,
        "oddsTeam2": 2.5
      },
        {
          "companyName": 'Paddy Power',
          "oddsTeam1": .9,
          "oddsTeam2": 1.9
        }]
      
    }
  ];

  ngOnInit() {
  }

}

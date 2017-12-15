import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-twitter-display',
  templateUrl: './twitter-display.component.html',
  styleUrls: ['./twitter-display.component.css']
})
export class TwitterDisplayComponent implements OnInit {

  constructor(private http: Http) {
    
   }
  
  ngOnInit() {
  }

}

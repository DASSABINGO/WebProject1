import { Component, OnInit, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bbc-display',
  templateUrl: './bbc-display.component.html',
  styleUrls: ['./bbc-display.component.css']
})
export class BbcDisplayComponent implements OnInit {

  private apiUrl: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3b40babbdeb84c3c97b6e142d67e1c20";
  data:any ={};
  constructor(private http:Http) { 
    console.log('Hello Hello');
    this.get1();
    this.getData();
  }
  getData(){
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }
  get1(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
  ngOnInit() {
  }

}

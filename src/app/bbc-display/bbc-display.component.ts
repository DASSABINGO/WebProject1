import { Component, OnInit, } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bbc-display',
  templateUrl: './bbc-display.component.html',
  styleUrls: ['./bbc-display.component.css']
})
export class BbcDisplayComponent implements OnInit {

  private apiUrl: "https://api.the-odds-api.com/v2/odds/?apiKey=5ab3e77933c9548bbf89f62de3847c31&sport=NBA&region=uk";
  data:any ={};
  constructor(private http:Http) { 
    console.log('Hello Hello');
    this.get1();
    this.getData();
    
  }
  getData(){
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
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

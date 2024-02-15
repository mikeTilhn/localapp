import { Component, OnInit } from '@angular/core';
import { IncomefetchService } from '../shared/incomefetch.service';
import { HttpClient } from '@angular/common/http';
import { Incomestatement } from '../models/instmodel';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-incomestatement',
  templateUrl: './incomestatement.component.html',
  styleUrls: ['./incomestatement.component.scss']
})
export class IncomestatementComponent implements OnInit  {
  statements: Incomestatement[] =[];
  firstQuarter: Incomestatement[]=[];
  secondQuarter:Incomestatement[]=[];
  thirdQuarter:Incomestatement[]=[];
  fourthQuarter:Incomestatement[]=[];
  totalQuarter: any [] =[];
  totalFirst: any [] =[];
  totalSecond: any [] =[];
  totalThird: any [] =[];
  totalFourth: any [] =[];
  totalAll: any []=[];

  constructor(
    private http: HttpClient,
    private incomefetch: IncomefetchService
   
    ){
}


  ngOnInit() {
    this.incomefetch.getStatement().subscribe((data)=>{
      this.firstQuarter = data.filter(d => d.dateRangeStart === "Jan, 23");
      this.secondQuarter = data.filter(d => d.dateRangeStart === "Apr, 23");
      this.thirdQuarter = data.filter(d => d.dateRangeStart === "Jul, 23");
      this.fourthQuarter = data.filter(d => d.dateRangeStart === "Oct, 23");
      this.totalFirst = this.firstQuarter.map((item)=>{
        return item.total
      })
      this.totalSecond = this.secondQuarter.map((item)=>{
        return item.total
      })
      this.totalThird = this.thirdQuarter.map((item)=>{
        return item.total
      })
      this.totalFourth = this.fourthQuarter.map((item)=>{
        return item.total
      })

      // this.totalAll = this.totalFirst + this.totalSecond + this.totalThird + this.totalFourth
    });

 
   
    
  }


}

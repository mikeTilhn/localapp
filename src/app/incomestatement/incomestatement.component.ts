import { Component, OnInit } from '@angular/core';
import { IncomefetchService } from '../shared/incomefetch.service';
import { HttpClient } from '@angular/common/http';
import { Incomestatement } from '../models/instmodel';
import { map, reduce } from 'rxjs';
import { Observable } from 'rxjs';

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
  allAccTotalsta: number []=[];
  totalSum: any;
  inputValue: any;
  
  constructor(
    private http: HttpClient,
    private incomefetch: IncomefetchService
    ){
}

  // ngOnInit() {
  //   this.incomefetch.getStatement().pipe(
  //     map(data=> data.map(item => item.total)),
  //     reduce((acc, val)=> acc + val, 0 )
  //   ).subscribe(sum = this)
  // }
  ngOnInit() {
    this.incomefetch.getStatement().subscribe((data)=>{
      // console.log(data.forEach(item=> item.dateRangeStart));
      // this.firstQuarter = data.filter(d => d.dateRangeStart === new Date(2023, 0))
      // this.secondQuarter = data.filter(d => d.dateRangeStart === new Date(2023, 3));
      // this.thirdQuarter = data.filter(d => d.dateRangeStart === new Date(2023, 6));
      // this.fourthQuarter = data.filter(d => d.dateRangeStart === new Date(2023, 9));
      this.statements = data;
       // this.totalAll = this.totalFirst + this.totalSecond + this.totalThird + this.totalFourth
    });
  }

  getquarter() {
    const enteredQuarter = this.inputValue.split('-')
    const year = Number.parseInt(enteredQuarter[0]);
    const month = Number.parseInt(enteredQuarter[1]);
    const newDate = new Date(year, month-1)
    const formattedDate = `${newDate.getFullYear()}-${(newDate.getMonth() + 1).toString().padStart(2, '0')}`;

      
    this.statements.map((item)=>{
      
      const date =item.dateRangeStart.toString() ;
      const dateSplit = date.split('-');
      const yr = Number.parseInt(dateSplit[0]);
      const mnt = Number.parseInt(dateSplit[1]);
      const newDte = new Date(yr, mnt-1);
      const frmtedDate = `${newDte.getFullYear()}-${(newDte.getMonth() + 1).toString().padStart(2, '0')}`;
        console.log("result: " +frmtedDate, "request: "+ formattedDate)
      
      // if(frmtedDate === formattedDate){
      //   console.log("true");
      // }else{
      //   console.log("false")
      // }
    })
  }
}
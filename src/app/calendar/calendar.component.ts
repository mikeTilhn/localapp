import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Evtcalendar } from '../models/eventcalendar';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  currentEvts: Evtcalendar[] =[];
  evtTypeValue='';

  range:FormGroup = new FormGroup({
    start: new FormControl(''),
    end: new FormControl('')
  });

  evtSch: FormGroup = new FormGroup({
    organizer: new FormControl(''),
    evtName: new FormControl(''),
    evtLocation: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private http: HttpClient, 
              private evtService: EventService,
              private formBuilder: FormBuilder
              ){
  }

  ngOnInit() {
    this.evtService.getEvents().subscribe((evts)=>{
      this.currentEvts = evts;
    })
  }

   onSubmit(){
   const sDate:Date = this.range.value.start;
   const eDate:Date = this.range.value.end;
    // console.log(this.evtSch.value.description);
    let newEvt:any= {
      organizer: this.evtSch.value.organizer,
      startDate: sDate,
      endDate: eDate,
      evtName: this.evtSch.value.evtName,
      evtType: this.evtTypeValue,
      evtLocation:this.evtSch.value.evtLocation,
      description:this.evtSch.value.description,
    }
    // console.log(newEvt);
    return this.evtService.postEvent(newEvt);
    this.range.reset() 
    this.evtSch.reset();
    this.evtTypeValue = '';
  }

  radioValues(event:any){
    this.evtTypeValue = event.value;
  }

}

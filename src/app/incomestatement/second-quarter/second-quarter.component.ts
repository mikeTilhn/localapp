import { Component, Input } from '@angular/core';
import { Incomestatement } from 'src/app/models/instmodel';

@Component({
  selector: 'app-second-quarter',
  templateUrl: './second-quarter.component.html',
  styleUrl: './second-quarter.component.scss'
})
export class SecondQuarterComponent {
  @Input() items: Incomestatement []=[]

}

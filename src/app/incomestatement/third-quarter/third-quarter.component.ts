import { Component, Input } from '@angular/core';
import { Incomestatement } from 'src/app/models/instmodel';

@Component({
  selector: 'app-third-quarter',
  templateUrl: './third-quarter.component.html',
  styleUrl: './third-quarter.component.scss'
})
export class ThirdQuarterComponent {
@Input() items: Incomestatement[]=[];
}

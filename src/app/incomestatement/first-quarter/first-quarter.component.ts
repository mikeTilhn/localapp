import { Component, Input } from '@angular/core';
import { Incomestatement } from 'src/app/models/instmodel';

@Component({
  selector: 'app-first-quarter',
  templateUrl: './first-quarter.component.html',
  styleUrl: './first-quarter.component.scss'
})
export class FirstQuarterComponent {
  @Input() items: Incomestatement []=[]
}

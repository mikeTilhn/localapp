import { Component, Input } from '@angular/core';
import { Incomestatement } from 'src/app/models/instmodel';

@Component({
  selector: 'app-fourth-quarter',
  templateUrl: './fourth-quarter.component.html',
  styleUrl: './fourth-quarter.component.scss'
})
export class FourthQuarterComponent {
  @Input() items: Incomestatement []=[]

}

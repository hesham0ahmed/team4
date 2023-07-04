import { Component } from '@angular/core';
import { Ibenefits } from '../Ibenefits';
import { benefits } from '../benefits';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {

  benefits: Ibenefits [] = benefits;

  constructor () {}

}

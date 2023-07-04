import { Component } from '@angular/core';
import { Iteam } from '../Iteam';
import { team } from '../team';
import { Irating } from '../Irating';
import { rating } from '../rating';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  team: Iteam[] = team;
  rating: Irating[] = rating;

  constructor() {
    console.log(this.team);
  }
  // member: Iteam = {} as Iteam;
  // index: number = 0;
}

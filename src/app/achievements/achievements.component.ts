import { Component, OnInit } from '@angular/core';
import { Ialumnis } from '../Ialumnis';
import { alumnis } from '../alumnis';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  alumni_arr : Ialumnis[] = [];

  ngOnInit(): void {

    this.alumni_arr = alumnis;
    console.log("yyy");
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Ialumnis } from '../Ialumnis';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  alumniData: Ialumnis[] = [];
  selectedAlumni: Ialumnis | null = null;

  constructor(private alumniService: AlumniService) { }

  ngOnInit() {
    this.alumniData = this.alumniService.getAlumniData();
  }

  showDetails(alumni: Ialumnis) {
    this.selectedAlumni = alumni;
  }
}


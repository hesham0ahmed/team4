import { Component, OnInit } from '@angular/core';
import { Ialumnis } from '../Ialumnis';
import { AlumniService } from '../alumni.service';


@Component({
  selector: 'app-alumni-directory',
  templateUrl: './alumni-directory.component.html',
  styleUrls: ['./alumni-directory.component.scss']
})

export class AlumniDirectoryComponent implements OnInit {
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

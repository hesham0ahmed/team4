import { Component, OnInit } from '@angular/core';
import { Merge } from '../Merge';
import { IMerge } from '../IMerge';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit{
  events_arr : IMerge[] = [];
  id_detail : number= -1;

  

  constructor(private route : ActivatedRoute , private router : Router) {
    
  }


  ngOnInit(): void {

    this.events_arr = Merge;
    this.route.params.subscribe(params => {

      this.id_detail = params['idDetail'];
      

    });
  }

}

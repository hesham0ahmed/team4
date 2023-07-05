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
  private mywindow : any;
  photo : string ="";

  constructor(private route : ActivatedRoute , private router : Router) {
    
  }

  show(id : number) {
    if(this.mywindow) {
      this.mywindow.close();
     }
     //console.log(URL);
     this.photo = "/assets/images/"+this.events_arr[id].photo;
     this.mywindow = window.open(this.photo, "_blank", "resizable=no, titlebar=0, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=800, height=600, left=300, top=100 " );
  }

  ngOnInit(): void {

    this.events_arr = Merge;
    this.route.params.subscribe(params => {

      this.id_detail = params['idDetail'];
      

    });
  }

}

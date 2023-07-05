import { Component, OnInit } from '@angular/core';
import { Merge } from '../Merge';
import { IMerge } from '../IMerge';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';


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

  show(item : IMerge) {

    Swal.fire ({ 
      
      imageUrl : `/assets/images/${item.photo}` ,
      position : 'center' ,
      html : `<div class="d-flex align-items-center justify-content-center">
      <div class="card" style="width: 22rem;">
      ${(item.available == false) ? "<div style='color :red;'>Not Available!</div>" : ""}
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
          <h5 class="card-title">normal price : ${item.price}$</h5>
          <h5 class="card-title">member price : ${item.xprice}$</h5>
          <p class="card-text" >
              ${item.description}
          </p>
      </div>
      </div>
      </div>` ,
      confirmButtonText : 'Close' ,
      confirmButtonColor : '#3B71CA' ,
      imageWidth : 'auto' ,
      imageHeight : 'auto' ,

    })
    
  }

  ngOnInit(): void {

    this.events_arr = Merge;
    this.route.params.subscribe(params => {

      this.id_detail = params['idDetail'];
      

    });
  }

}

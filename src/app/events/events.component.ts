import { Component, OnInit } from '@angular/core';
import { Events } from '../Events';
import { IEvents } from '../IEvents';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{

  events_arr : IEvents[] = [];
  id_detail : number= -1;
  private mywindow : any;
  photo : string ="";

  constructor(private route : ActivatedRoute , private router : Router) {
    
  }

  show(item : IEvents) {
    Swal.fire ({ 
      
      imageUrl : `/assets/images/${item.photo}` ,
      position : 'center' ,
      html : `<div class="d-flex align-items-center justify-content-center">
      <div class="card" style="width: 22rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
          <h5 class="card-title">${item.date}</h5>
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

    this.events_arr = Events;
    this.route.params.subscribe(params => {

      this.id_detail = params['idDetail'];
      

    });
  }

}

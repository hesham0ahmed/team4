import { Component, OnInit } from '@angular/core';
import { Events } from '../Events';
import { IEvents } from '../IEvents';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{

  events_arr : IEvents[] = [];
  id_detail : number= -1;


  constructor(private route : ActivatedRoute , private router : Router) {}


  ngOnInit(): void {

    this.events_arr = Events;
    this.route.params.subscribe(params => {

      this.id_detail = params['idDetail'];

    });
  }

}

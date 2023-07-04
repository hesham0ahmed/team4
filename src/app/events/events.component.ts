import { Component, OnInit } from '@angular/core';
import { Events } from '../Events';
import { IEvents } from '../IEvents';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{

  events_arr : IEvents[] = [];

  ngOnInit(): void {

    this.events_arr = Events;
    
  }

}

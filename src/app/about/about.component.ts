import { Component } from '@angular/core';
import { Iteam } from '../Iteam';
import { team } from '../team';
import { Irating } from '../Irating';
import { rating } from '../rating';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

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

  showModal(member: Iteam) {
    Swal.fire({
      imageUrl: member.img,
      title: member.name,
      text: member.details,
      confirmButtonColor: '#rgb(4, 4, 44)',
      imageHeight: 400,
      imageAlt: 'A tall image',
      footer: '<a href="">Get in conntact</a>',
    });
  }
}

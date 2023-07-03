import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar') as HTMLElement;
  const scrolled = window.scrollY > 0;
  navbar.classList.toggle('scrolled', scrolled);
});
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.social') as HTMLElement;
  const scrolled = window.scrollY > 0;
  navbar.classList.toggle('scrolled', scrolled);
});
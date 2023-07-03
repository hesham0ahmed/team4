import { Injectable } from '@angular/core';
import { alumnis } from './alumnis';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  getAlumniData() {
    return alumnis;
  }
}
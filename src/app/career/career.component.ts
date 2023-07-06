import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent {
  // pdfSrc = 'assets/alumni/CV-Template.pdf';

  downloadPDF() {
    let link = document.createElement('a');
    link.download = 'CV-Template.pdf';
    link.href = 'assets/CV-Template.pdf';
    link.click();
  }
}

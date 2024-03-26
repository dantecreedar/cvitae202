import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageUrl = '../../../../assets/WhatsApp Image 2024-01-02 at 12.27.00.jpeg';
  gmail = 'briangalli1993@gmail.com';
  contact = '+5493765225748';
  home = 'Thanks!';

  downloadPdf() {
    const pdfUrl = '../../../../assets/BrianAlexisGalli.pdf'; // Replace with the actual path to your PDF file

    // If the PDF is hosted on a server, you can use HttpClient to fetch it
    // this.http.get(pdfUrl, { responseType: 'blob' }).subscribe((data: Blob) => {
    //   const blob = new Blob([data], { type: 'application/pdf' });
    //   const url = window.URL.createObjectURL(blob);
    //   window.open(url);
    // });

    // If the PDF is located within your Angular project, you can create a direct download link
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'BrianAlexisGalli.pdf';
    link.click();
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {

  fileName = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("report", file);

          const upload$ = this.http.post("/http://localhost:3000/prls", formData);

          upload$.subscribe();
      }
  }

}


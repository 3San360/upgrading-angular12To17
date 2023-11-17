import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.showSpinner()
  }

  showSpinner() {
    this.spinner.show('san');
    setTimeout(() => {
      this.spinner.hide();
    }, 5000); // Hide the spinner after 5 seconds (adjust as needed)
  }

  hideSpinner() {
    this.spinner.hide('san');
  }
}

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  public chartOptions: any;

  constructor(private spinner: NgxSpinnerService) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        height: 200
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {
    this.showSpinner();
  }

  showSpinner() {
    this.spinner.show('san');
    setTimeout(() => {
      this.spinner.hide('san');
    }, 1000); // Hide the spinner after 5 seconds (adjust as needed)
  }

  hideSpinner() {
    this.spinner.hide('san');
  }
}

import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PieChartDataService } from '../services/pie-chart-data.service';

Chart.register(...registerables)

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private pieService: PieChartDataService) {
    console.log(pieService.boxCount);


  }

  ngOnInit(): void {
    this.renderChart()
    // this.renderChart('pie', 'barchart')
  }

  renderChart() {
    new Chart('barchart', {
      type: 'bar',
      data: {
        labels: ['Box File', 'Voucher File', 'kangaroo File', 'China Box File', 'Lamina File', 'Four Lace File', 'Spring File'],
        datasets: [{
          label: '# of Files',
          data: [this.pieService.boxCount, this.pieService.voucherFile, this.pieService.kangarooFile, this.pieService.chinaFile,
          this.pieService.fourFile, this.pieService.fourFile, this.pieService.springFile],
          borderWidth: 1
        }]
      },
      options: {

        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}




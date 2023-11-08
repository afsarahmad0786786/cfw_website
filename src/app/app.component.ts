import { Component } from '@angular/core';
import { PieChartDataService } from './services/pie-chart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ecommece_app';

   constructor(private load: PieChartDataService) {
    
   }
}

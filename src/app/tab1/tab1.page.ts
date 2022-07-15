import { Component } from '@angular/core';
import {ApexAxisChartSeries, ApexChart} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public options: Partial<ChartOptions>;

  constructor() {
    this.spackLine();
  }

  spackLine(){
    this.options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      series: [
        {
          data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
        }
      ]
    };
  }

}

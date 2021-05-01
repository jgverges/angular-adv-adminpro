import { Component, Input } from '@angular/core';
/* ng2-charts */
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {
  // Doughnut
/*   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
 */  public doughnutChartType: ChartType = 'doughnut';

  public colors : Color[] = [
    { backgroundColor : ['#6857E6', '#009FEE','#F02059'] }
  ]

  @Input() title: string = 'Sin titulo';
 
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
}

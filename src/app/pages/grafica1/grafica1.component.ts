import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  labels1:string [] = ['Pan', 'Agua', 'Helado'];
  public data1 = [
    [50, 450, 100],
  ];

  labels2:string [] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data2 = [
    [350, 200, 600],
  ];

  labels3:string [] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data3 = [
    [150, 450, 100],
  ];

}

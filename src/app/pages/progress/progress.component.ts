import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent  {

  constructor(){console.log('Progreso...')}
  progreso1:number = 20;
  progreso2:number = 35;

  get getPorcentaje1(){
    return this.progreso1 +'%';
  }
  get getPorcentaje2(){
    return this.progreso2 +'%';
  }
}

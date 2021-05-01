import { Component, EventEmitter, Input,  OnInit,  Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  @Input('valor') progreso:number = 50;
  @Input() btnClass:string= "btn-info";

  @Output('valor') porcentaje = new EventEmitter<number>();
 
  cambiarValor(valor: number):void {
    if (this.progreso >= 100 && valor>=0 ) {
      this.porcentaje.emit(100)
    return
    }
    if (this.progreso <=0 && valor <0) {
      this.porcentaje.emit(0)
      return
    }
    this.porcentaje.emit(this.progreso + valor);
  }

  onChange(nuevoValor:number){
    if (nuevoValor >= 100 ) {
      this.porcentaje.emit(100)
    return
    }
    if (nuevoValor <= 0 ) {
      this.porcentaje.emit(0)
      return
    }
    this.porcentaje.emit(this.progreso );
  }

}


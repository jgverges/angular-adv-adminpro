import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
/* Importar funcion para corregir maquetacion del login */
 declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingService: SettingsService){}

  ngOnInit(): void {  
    /* Función global que se llama en el index.html del archivo jquery assets/js/custom.js */  
    customInitFunctions();
  }


}

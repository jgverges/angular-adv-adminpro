import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {
    this.getUsuarios()
      .then( result => console.log(result));
  }  

getUsuarios(){
  return new Promise ( resolve => {

    fetch('https://reqres.in/api/users')
             .then(res => res.json())  
             .then ( body => resolve(body.data));
  })

}

}

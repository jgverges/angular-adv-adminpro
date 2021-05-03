import { Component, OnDestroy,} from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent  implements OnDestroy{

  titulo:string;
  tituloSubs$:Subscription;

  constructor(private router : Router) {
     
    this.tituloSubs$ =  this.getArgumentosRuta()
                          .subscribe(({titulo}) => {
                            this.titulo = titulo;
                            document.title = `Adminpro-${titulo}`;
                            });
   }
   
   getArgumentosRuta(){
     return this.router.events
     .pipe(
       filter (data => data instanceof ActivationEnd ),
       filter ( (event:ActivationEnd)  => event.snapshot.firstChild ===null),
       map( (ev:ActivationEnd )=> ev.snapshot.data)
       )
       
      }
      
    ngOnDestroy(): void {
      this.tituloSubs$.unsubscribe();
    }

}

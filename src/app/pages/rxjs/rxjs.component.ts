import { Component, OnDestroy} from '@angular/core';
/* rxjs */
import { Observable, interval, Subscription } from 'rxjs';
import {filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs:Subscription;

  constructor() {

    this.intervalSubs = this.retornaIntervalo()
        .subscribe(console.log)

  /*   this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
        data => console.log('Subs:',data),
        err => console.warn('error ==>',err),
        () => console.log('Completed')
    ) */
    
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  retornaIntervalo():Observable<string>{
    
    return interval(1000).pipe(
      take(5),
      filter(data => data % 2 === 0), // pares
      map( x => x*100 +' hh')
    ); 
  }


  retornaObservable():Observable<number>{
    let i = -1;

    return new Observable<number>(observer => {
      
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if (i===4) {
          clearInterval(intervalo);
          observer.complete();

        }
        if (i === 2) {
          observer.error('error con el 2 observer')
        }
      },1000)
    })
  }
}

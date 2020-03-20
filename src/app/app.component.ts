import { Component, OnInit } from '@angular/core';
import { Math } from 'commonfunctions';
import { Observable, fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public name = 'Many\'s Project';


public async ngOnInit() {

  console.log(Math.getPi());

    // Calling a promise
    // console.log('Before calling Promise');
    // let users = await this.getUsers();
    // users.forEach(name=>{
    //   console.log(name);
    // });

    // (await this.getUsers()).forEach((name)=>{
    //   console.log(name);
    // });

    // this.getUsers().then((res)=>{
    //   res.forEach(name=>{console.log(name)});
    // });

    // console.log(await this.greetingPromise);

    // this.greetingPromise.then( res => {
    //   console.log(`Greeting from promise: ${res}`);
    // });

    // Subscribing to an Observable
    // this.greetingObservable.subscribe({
    //   next: (result) => { console.log(`Got value ${result}`);},
    //   complete: () => { console.log('Done with the subscription');},
    //   error: (msg) => { console.log(`ERROR: ${msg}`) }
    // });

  }


  // Promises *******************
  // public getRoles(observer): Observable<string[]> {
  //   return observer.next(['Jon','pal']);
  // }
  // public getUsers(): Promise<string[]> {
  //   console.log('Inside Promise method');
  //   let users = ['Ringo', 'John', 'Paul'];
  //   return Promise.resolve(users);
  // }

  // public greetingPromise = new Promise( (resolve, reject) => {
  //   console.log('Inside Promise (proof of being eager)');
  //   resolve('Promise Return Value');
  // });

  // Observable *****************
  // public greetingObservable = new Observable( (observer) => {
  //   console.log('Inside Observable (proof of being lazy)');
  //   observer.next(1);
  // } );

}

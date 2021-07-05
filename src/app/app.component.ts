import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(){

  }
  ngAfterViewInit(): void {
    firebase.default.analytics().logEvent('eventname', {
      'firsttimeuser' : true,
    })
  }
}

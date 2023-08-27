import { Component, HostListener } from '@angular/core';
import * as firebase from 'firebase/app';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  screenWidth!:number;
  constructor(){

  }
  ngAfterViewInit(): void {
    // firebase.default.analytics().logEvent('eventname', {
    //   'firsttimeuser' : true,
    // })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
  this.screenWidth= window.innerWidth;
  }
  downloadPdf() {
    const pdfUrl = '../../assets/Inshal-Resume.pdf';
    const pdfName = 'Mohammad-Inshal-Resume';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}

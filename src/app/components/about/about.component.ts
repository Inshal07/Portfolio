import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone:true,
  imports:[NavFooterComponent]
})
export class AboutComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  scrolltoEducation(){
    window.scroll(0, 1200)
  }  
  gotoProject(){
    this.route.navigate(['/project'])
  }
}

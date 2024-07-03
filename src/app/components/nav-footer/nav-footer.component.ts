import { Component, OnInit} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; 
@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss'],
  standalone:true,
  imports:[RouterLink, RouterLinkActive]
})
export class NavFooterComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit(): void {

  }

}

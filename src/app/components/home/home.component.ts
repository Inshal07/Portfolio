import { Component, OnInit } from '@angular/core';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NavFooterComponent, NgOptimizedImage]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

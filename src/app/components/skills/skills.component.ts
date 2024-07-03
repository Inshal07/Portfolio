import { Component, OnInit } from '@angular/core';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone:true,
  imports:[NavFooterComponent, NgFor, NgOptimizedImage]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listSKills = [
    {
      'Name': 'Angular',
      'value': 90
    },
    {
      'Name': 'Javascript',
      'value': 70
    },
    {
      'Name': 'UI/UX Designing',
      'value': 90
    }, 
    {
      'Name': 'Node.js (Express)',
      'value': 70
    },
    {
      'Name': 'HTML',
      'value': 75
    },
    {
      'Name': 'CSS',
      'value': 70
    },
    {
      'Name': 'Typescript',
      'value': 65
    },
    {
      'Name': 'Bootstrap',
      'value': 55
    },
    {
      'Name': 'MongoDB',
      'value': 45
    },
    {
      'Name': 'Python',
      'value': 65
    }
  ]
}

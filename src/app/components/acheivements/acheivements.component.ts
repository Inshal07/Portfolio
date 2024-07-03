import { Component, OnInit } from '@angular/core';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-acheivements',
  templateUrl: './acheivements.component.html',
  styleUrls: ['./acheivements.component.scss'],
  standalone:true,
  imports:[NavFooterComponent, NgFor, NgOptimizedImage]
})
export class AcheivementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 listCertificate=[
  {
    Name: 'Secure Full Stack MEAN Developer',
    url:'../../assets/certificates/Secure Full Stack MEAN Developer_page-0001.jpg'
  },
  {
    Name: 'AWS Certified Developer Associate',
    url:'../../assets/certificates/AWS Certified Developer - Associate_page-0001.jpg'
  },
   {
     Name:'Angular Developer Bootcamp',
     url: '../../assets/certificates/Angular-Certificate.jpg'
   },
  {
    Name:'Front-End Javascript Frameworks: Angular',
    url: '../../assets/certificates/Angular-Certificate-Coursera.jpg'
  },
  {
    Name:'Foundation of User Experience (UX) Design',
    url: '../../assets/certificates/UX-Foundation-Cousera.jpg'
  },
  {
    Name:'Server-side Development with NodeJS, Express and MongoDB',
    url: '../../assets/certificates/Node-Express-Mongo-Certificate-Coursera.jpg'
  },
  {
    Name:'Getting Started with Python',
    url: '../../assets/certificates/Coursera.jpg'
  },
  {
    Name:'Introduction to HTML5',
    url: '../../assets/certificates/Coursera-HTML5.jpg'
  },
  {
    Name:'Crash Course Python',
    url: '../../assets/certificates/Python_google_Coursera.jpg'
  },
  {
    Name:'Python and Django Full-Stack Web Developer Bootcamp',
    url: '../../assets/certificates/Python-Django.jpg'
  },
  {
    Name:'UI/UX Design Training ',
    url: '../../assets/certificates/UI_UX.jpg'
  }
 ];
 listEvents=[
  {
    Name:'Pulzion`21 Hackthon ',
    url: '../../assets/certificates/Pulzion.jpg'
  },
 {
   Name:'Google Solution Challenge',
   url: '../../assets/certificates/Google.jpg'
 },
 {
   Name:'Chefs Hack',
   url: '../../assets/certificates/Chefs.jpg'
 },
 {
   Name:'UI Design Challenge DocoNation',
   url: '../../assets/certificates/UI.jpg'
 },
 {
   Name:'Virtual Hackathon- HackNation DocoNation',
   url: '../../assets/certificates/Docogen.jpg'
 }

]

onAchieve = ()=>window.scroll(0, 600);


 onEvent = () => window.scroll(0, 5500);

}

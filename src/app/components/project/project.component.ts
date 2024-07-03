import { Component, OnInit } from '@angular/core';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';

interface viewer {
  name: string,
  image: string,
  scroll: number
}

 
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone:true,
  imports:[NavFooterComponent, NgFor, NgOptimizedImage, NgIf]
})
export class ProjectComponent implements OnInit {
 patho =true
  constructor() { }
  listProjects =[
    {
      Name: 'Roster',
      desc:'Roster Management Application is a comprehensive solution designed to streamline employee scheduling and leave management. Built with modern technologies including Angular, Node.js, Express.js, MongoDB, Socket.io, and Bootstrap, our app ensures a smooth and efficient user experience. Hosted on Render and Vercel, it guarantees reliability and scalability. Key Features: •	Dual Access: Separate sections for employees and admins to cater to specific needs. •	Leave Management: Employees can update their upcoming leaves easily. •	Approval System: Admins can review and approve leave requests efficiently. •	Shift Assignment: Admins can assign employees to shifts seamlessly. •	Real-time Updates: Live updates powered by Socket.io ensure all users are always informed of the latest changes. Our application provides a dynamic and interactive platform that enhances productivity and ensures seamless communication between employees and administrators.',
      image: '../../assets/roster.svg', 
      link:'https://github.com/inshal-dev/roster-gcc'
    },
    {
      Name: 'Pathodux',
      desc:'It is a platform for new and experienced Developers. The Platform contains Learning, Idea Sharing, Exploring, and connecting to Experienced Developers. The Pathodux is a Platform for new and experienced software developers.  The Platform consists of Feature Like Learning, Idea Sharing, Explore these features are created in a unique way for the user to get help and get to know more about the Computer and IT World. The learn feature is created in a unique manner to have fun while learning(Learning through Game).',
      image: '../../assets/Pathodux-home.svg',
      link:'https://pathodux.firebaseapp.com/#/'
    },
    {
      Name: 'Pandemic Dashboard',
      desc:'Pandemic Dashboard. The Dashboard is built for the purpose of Information Sharing related to Pandemic/ Epidemic Diseases. The dashboard consists of disease information and charts of Covid-19, Ebola, Spanish-Flu, Plague. User will also be able to share their sentiments related to diseases.',
      image: '../../assets/pandemics-dashboard.svg',
      link:'https://dashboard-user-34fbc.firebaseapp.com/'
    },
    {
      Name: 'BreadGo',
      desc:'BreadGo is a Food Charity Web app. The Purpose of the app is to reduce food waste and help those who are in need. The Web-app is responsive and users can also add a home icon for the web app for easy access. ',
      image: '../../assets/bread-go.svg',
      link:'https://breadgo-ac68d.firebaseapp.com/'
    },
  ]

  projectView:Array<viewer> = [
    {          
      name:'Roster',
      image: '../../assets/roster.svg', 
      scroll: 600 
    },
    {
      name:'PathoDux',
      image: '../../assets/pathodux-logo.svg', 
      scroll: 1300 
    },
    {
      name:'Pandemics Dashboard',
      image: '../../assets/pandemics-dashboard.svg', 
      scroll: 2000 
    },
    {
      name:'BreadGo',
      image: '../../assets/bread.jpg', 
      scroll: 2700 
    } 
  ]
  
  designView:Array<viewer> = [
    {
      name:'Dance Studio UI',
      image: '../../assets/Dance.PNG', 
      scroll: 3400 
    },
    {
      name:'Real Estate platform UI/UX',
      image: '../../assets/env.png', 
      scroll: 4100
    },
    {
      name:'Gym Web-App UI/UX',
      image: '../../assets/gym.svg', 
      scroll: 4800
    } 
  ]

  ngOnInit(): void {
  }

  viewScroller(scrollto:number){
    window.scroll(0,scrollto)
  }   
 
}



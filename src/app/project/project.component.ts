import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
 patho =true
  constructor() { }
  listProjects =[
    {
      name:'Sure (Watch E-com)',
      desc:'Sure is watch e-com platform created using Angular and bootstrap for client-side and Node.js, express.js for server-side and a JSON-based database.',
      // imageHome:'../../assets/pathodux.PNG',
      // imageBoard:'../../assets/basic1.png',
      // imageEnd:'../../assets/Idea Page.svg',
      image: '../../assets/Sure-home.svg',
      link:'https://github.com/inshal-dev/SURE-Ecom',
    },
    {
      Name: 'Pathodux',
      desc:'It is a platform for new and experienced Developers. The Platform contains Learning, Idea Sharing, Exploring, and connecting to Experienced Developers. The Pathodux is a Platform for new and experienced software developers.  The Platform consists of Feature Like Learning, Idea Sharing, Explore these features are created in a unique way for the user to get help and get to know more about the Computer and IT World. The learn feature is created in a unique manner to have fun while learning(Learning through Game).',
      // imageHome:'../../assets/pathodux.PNG',
      // imageBoard:'../../assets/basic1.png',
      // imageEnd:'../../assets/Idea Page.svg',
      image: '../../assets/Pathodux-home.svg',
      link:'https://pathodux.in/'
    },
    {
      Name: 'Pandemic Dashboard',
      desc:'Pandemic Dashboard. The Dashboard is built for the purpose of Information Sharing related to Pandemic/ Epidemic Diseases. The dashboard consists of disease information and charts of Covid-19, Ebola, Spanish-Flu, Plague. User will also be able to share their sentiments related to diseases.',
      // imageHome:'../../assets/homeDash.PNG',
      // imageBoard:'../../assets/infoDash.PNG',
      // imageEnd:'../../assets/selectDash.PNG',
      image: '../../assets/pandemics-dashboard.svg',
      link:'https://dashboard-user-34fbc.firebaseapp.com/'
    },
    {
      Name: 'BreadGo',
      desc:'BreadGo is a Food Charity Web app. The Purpose of the app is to reduce food waste and help those who are in need. The Web-app is responsive and users can also add a home icon for the web app for easy access. ',
      // imageHome:'../../assets/home.PNG',
      // imageBoard:'../../assets/form.PNG',
      // imageEnd:'../../assets/history.PNG',
      image: '../../assets/bread-go.svg',
      link:'https://breadgo-ac68d.firebaseapp.com/'
    },
  ]


  ngOnInit(): void {
  }
  openPath(){
    window.scroll(0, 600)
  }
  openPan(){
      window.scroll(0, 1300)
  }
  openBread(){
    window.scroll(0, 2000)
    }
    youtube(){
      window.scroll(0, 2700)
      }
   dashboardNeu(){
     window.scroll(0, 3300)
  }
  onboard(){
    window.scroll(0, 4000)
 }
 gymUI(){
  window.scroll(0, 4700)
}
insta(){
  window.scroll(0, 5200)
}
dance(){
  window.scroll(0, 7200)
}
}

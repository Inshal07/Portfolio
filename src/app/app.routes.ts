import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { AcheivementsComponent } from './components/acheivements/acheivements.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'about', 
        component:AboutComponent
    },
    {
        path:'skill', 
        component:SkillsComponent
    },
    {
        path:'project', 
        component:ProjectComponent
    },
    {
        path:'acheviements', 
        component:AcheivementsComponent
    }
];

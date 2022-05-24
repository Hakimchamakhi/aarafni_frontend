import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compomentes/home/home.component';
import { ContactComponent } from './compomentes/contact/contact.component';
import { LoginComponent } from './compomentes/login/login.component';
import { SingupComponent } from './compomentes/singup/singup.component';
import { ServiceComponent } from './compomentes/service/service.component';
import { PrefrenceComponent } from './compomentes/prefrence/prefrence.component';
import { ConferenceComponent } from './compomentes/conference/conference.component';
import { DashboardComponent } from './compomentes/dashboard/dashboard.component';
import { NewprojectComponent } from './compomentes/newproject/newproject.component';
import { TeamregisterComponent } from './compomentes/teamregister/teamregister.component';
import { TeamloginComponent } from './compomentes/teamlogin/teamlogin.component';
import { MotivationComponent } from './compomentes/motivation/motivation.component';
import { ProjectComponent } from './compomentes/project/project.component';




const routes: Routes = [
{path:'', component :HomeComponent},
{path:'contact', component :ContactComponent},
{path:'project', component :ProjectComponent},
{path:'dashboard', component :DashboardComponent},
{path:'newproject', component :NewprojectComponent},
{path:'login', component :LoginComponent},
{path:'team/register', component :TeamregisterComponent},
{path:'team/login', component :TeamloginComponent},
{path:'singup', component :SingupComponent},
{path:'service', component :ServiceComponent},
{path:'prefrence',component :PrefrenceComponent},
{path:'conference',component :ConferenceComponent},
{path:'motivation',component :MotivationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

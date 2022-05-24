import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compomentes/home/home.component';
import { ContactComponent } from './compomentes/contact/contact.component';

import { LoginComponent } from './compomentes/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './compomentes/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SingupComponent } from './compomentes/singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule }from '@angular/router';
import{ApiService} from './api.service';
import { ServiceComponent } from './compomentes/service/service.component';
import { PrefrenceComponent } from './compomentes/prefrence/prefrence.component';
import { ConferenceComponent } from './compomentes/conference/conference.component';
import { DashboardComponent } from './compomentes/dashboard/dashboard.component';
import { NewprojectComponent } from './compomentes/newproject/newproject.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TeamloginComponent } from './compomentes/teamlogin/teamlogin.component';
import { TeamregisterComponent } from './compomentes/teamregister/teamregister.component';
import { MotivationComponent } from './compomentes/motivation/motivation.component';
import { ProjectComponent } from './compomentes/project/project.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    NavbarComponent,
    SingupComponent,
    ServiceComponent,
    PrefrenceComponent,
    ConferenceComponent,
    DashboardComponent,
    NewprojectComponent,
    TeamloginComponent,
    TeamregisterComponent,
    MotivationComponent,
    ProjectComponent,
    
  



    
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    DragDropModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

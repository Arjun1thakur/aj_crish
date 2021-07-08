import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { FronthomeComponent } from './fronthome/fronthome.component';
import { ProjecComponent } from './projec/projec.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
const appRouters:Routes=[
  {path:'',component:FronthomeComponent},
  {path:'about',component:AboutComponent},
  {path:'projects',component:ProjecComponent},
  {path:'contect',component:ContectComponent},
  {path:'social',component:SocialComponent},
  {path:'skills',component:SkillsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContectComponent,
    FronthomeComponent,
    ProjecComponent,
    SkillsComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

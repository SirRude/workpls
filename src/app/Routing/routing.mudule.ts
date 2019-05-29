import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from '../front-page/front-page.component';
import { MeetingComponent } from '../meeting/meeting.component';
import { LoginComponent} from '../login/login.component';
import { DatabaseComponent } from '../database/database.component';
import { ExtraWebrtctestComponent } from '../extra-webrtctest/extra-webrtctest.component'
import { MetodeThreeComponent } from '../metode-three/metode-three.component';


const appRoutes: Routes = [
  {path: 'front',   component: FrontPageComponent},
  {path: 'meet',    component: MeetingComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'data',    component: DatabaseComponent},
  {path: 'test',    component: ExtraWebrtctestComponent},
  {path: 'three', component: MetodeThreeComponent},

  

 
  { path: '', redirectTo: '/front', pathMatch: 'full' },
  { path: '**', component: FrontPageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutinModule { }
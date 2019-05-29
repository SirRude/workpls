import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { RoutinModule } from './Routing/routing.mudule';
import { MeetingComponent } from './meeting/meeting.component';
import { LoginComponent } from './login/login.component';
import { DatabaseComponent } from './database/database.component';
import {TestService} from './test.service';
import { ExtraWebrtctestComponent } from './extra-webrtctest/extra-webrtctest.component';
import { MetodeThreeComponent } from './metode-three/metode-three.component';
import { TestingnewwebrtcComponent } from './testingnewwebrtc/testingnewwebrtc.component'




@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    MeetingComponent,
    LoginComponent,
    DatabaseComponent,
    ExtraWebrtctestComponent,
    MetodeThreeComponent,
    TestingnewwebrtcComponent,
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RoutinModule,
    
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { SearchRoomComponent } from './SearchRoom/searchRoom.component';
import { RoomDetailsComponent } from './RoomDetails/roomDetails.component';
import { PersonalInfoComponent } from './PersonalInfo/personalInfo.component';
import { agreementComponent } from './Agreement/agreement.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SearchService} from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchRoomComponent,
    RoomDetailsComponent,
    PersonalInfoComponent,
    agreementComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, HttpClientJsonpModule, FormsModule,
    RouterModule.forRoot([
    { path: '',
        component: HomeComponent},
      { path: 'searchroom',
        component: SearchRoomComponent},
      { path: 'RoomDetails',
        component: RoomDetailsComponent},
      { path: 'PersonalInfo',
        component: PersonalInfoComponent},
      { path: 'TandC',
        component: agreementComponent}

    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component } from '@angular/core';
import {Search} from '../model/search.model';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';
import {SearchService} from '../search.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalInfo.component.html',
  styleUrls: ['./personalInfo.component.css']


})


export class PersonalInfoComponent {
  search = {
    name: '',
    lname: '',
    email: '',
    pnumber: ''
  };
  constructor(private http: HttpClient, public serSer: SearchService ) {

  }

}


import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Search} from '../model/search.model';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { SearchService } from '../search.service';
import { NgModel} from '@angular/forms';
import { NgForm} from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})

@Injectable()
export class HomeComponent implements OnInit {
   cities: Object;
  search: Search;
   rooms: Object;
    guest: number
   constructor(private http: HttpClient, public serSer: SearchService ) {
    this.search = new Search();
  }



  private citiesURL = 'http://localhost:4200/city';
  private searchURL = 'http://localhost:4200/search';

  ngOnInit() {
    this.getCities().subscribe(data => {
      this.cities = data;

    });
    /*this.searchdata.setRooms(this.rooms);*/
  }

  getCities() {
    return this.http.get(this.citiesURL);
  }

  getRooms() {
    return this.rooms;
  }


  searchValue() {
    /*const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /!*const body = JSON.stringify(this.search, {headers: headers});*!/
    const body = JSON.stringify(this.search);
     this.http.post(
      this.searchURL, body, httpOptions).subscribe(
      data => {this.rooms = data; console.log(this.rooms); },
      err => { console.log(err); }

    );*/
  }
 /* validateForm(f: any) {
    f.control.forEach(c => c.updateValueAndValidity());
  }*/
}



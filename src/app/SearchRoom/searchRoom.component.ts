import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchService } from '../search.service';
import {HttpHeaders} from '@angular/common/http';
import {HomeComponent} from '../Home/home.component';
import {Search} from '../model/search.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-search',
  templateUrl: './searchRoom.component.html',
  styleUrls: ['./searchRoom.component.css']
})
@Injectable()
export class SearchRoomComponent implements OnInit {
  rooms: Object;
  roomname;
  constructor(private http: HttpClient, private serSer: SearchService) {

  }

  private headers = new Headers({'Content-Type': 'application/json'});
  private searchURL = 'http://localhost:4200/rooms';

  ngOnInit() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*const body = JSON.stringify(this.search, {headers: headers});*/

    this.http.post(
      this.searchURL, httpOptions).subscribe(
      data => {this.rooms = data; console.log(this.rooms); },
      err => { console.log(err); }

    );


  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {


  public newSearchSubject = new BehaviorSubject<object>(
    {cityId: '1',
      distance: 'amss',
      maxpeople: '11',
      noBathroom: '1',
      noBedroom: '1',
      roomName: 'room',
    roomUrl: 'gghh'});

  /*cast = this.newSearchSubject.asObservable();*/
  constructor() { console.log(this.newSearchSubject); }

  public setRooms(data: Object) {
    this.newSearchSubject.next(data);
    console.log(data);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getTestOneData(): Observable<any> {
    return this.http.get('http://localhost:5566/item/edd/effd/');
    //return this.http.get('http://localhost:555/asdf/asdf/asdf');
  }


}

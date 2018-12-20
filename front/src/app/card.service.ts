import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  getCards(){
    let url='http://localhost:8000/card/api';
    return this.http.get(url);
  }

}

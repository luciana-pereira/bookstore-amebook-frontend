import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Book } from "./model/Book";
import { Observable } from "rxjs";

@Injectable()

export class BooksService
{
 baseUrl:string = "https://localhost:44387";

  httpOptions = {
    Headers: new HttpHeaders({'content-type' : 'application/json'})
  }

  constructor(private httpClient : HttpClient){}

  public getBook(): Observable<{}>{
    return this.httpClient
      .get(this.baseUrl + '/api/bookstore')
  }

}

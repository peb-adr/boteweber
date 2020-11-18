import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

export interface News{
  id: number;
  timestamp: Date;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  backendUrl: string = "http://localhost:26548";

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<News[]>(this.backendUrl + "/news")
      .pipe(
        map( res => {
          for (const n of res) {
            this.convertTimestamp(n)
          }
          return res
        })
      );
  }
  
  getNewsId(id) {

  }


  postNews() {

  }


  putNewsId(id) {

  }


  deleteNewsId(id) {

  }

    
  private convertTimestamp(res: News) {
    // timestamp is stored as string in json response, so convert to Date before returning
    res.timestamp = new Date(res.timestamp);
  }
  
}

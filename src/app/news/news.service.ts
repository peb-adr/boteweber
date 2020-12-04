import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { backendUrl } from "src/app/globals";

export interface NewsData{
  id: number;
  timestamp: Date;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<NewsData[]>(backendUrl + "/news")
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

    
  private convertTimestamp(res: NewsData) {
    // timestamp is stored as string in json response, so convert to Date before returning
    res.timestamp = new Date(res.timestamp);
  }
  
}

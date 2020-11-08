import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNews() {
    return [
      {'date': new Date() ,'title': "Verpennt!", 'message': "Heute wirds später, sorry!"},
      {'date': new Date() ,'title': "Pünktlich!", 'message': "Heute wieder nach Plan, alles cool!"},
      {'date': new Date() ,'title': "Lorem!", 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    ]
  }
  
}

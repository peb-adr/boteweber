import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  message: string;
  @Input()
  date: Date;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SubscriberData, SubscriberService } from 'src/app/subscriber/subscriber.service';

@Component({
  selector: 'app-admin-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class AdminSubscriptionsComponent implements OnInit {

  subscribers: SubscriberData[];
  subscriberNames: string[];
  
  constructor(private subscriberService: SubscriberService) { }

  ngOnInit(): void {
    this.subscriberService.getSubscribers().toPromise()
    .then((data: SubscriberData[]) => {
      this.subscribers = data;
      this.formatSubscriberNames();
    })
  }

  private formatSubscriberNames() {
    this.subscriberNames = this.subscribers
    .map((data: SubscriberData) => {
      return data.name + " <" + data.email + ">";
    })
  }
  
}

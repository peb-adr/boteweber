import { Component, OnInit } from '@angular/core';
import { SubscriberData, SubscriberService } from 'src/app/services/subscriber/subscriber.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: [
    './subscribe.component.css',
    '/src/app/shared/form.css'
  ]
})
export class UserSubscribeComponent implements OnInit {

  router: Router;

  name: string = "";
  email: string = "";

  constructor(
    private iRouter: Router,
    private subscriberService: SubscriberService
  ) {
    this.router = iRouter;
  }

  ngOnInit(): void {
  }
  
  makeSubscriber(): SubscriberData {
    return {
      id: -1,
      name: this.name,
      email: this.email,
      groups: []
    }
  }
  
  onSubmit() {
    this.subscriberService.postSubscriber(this.makeSubscriber()).toPromise()
    .then((data: SubscriberData) => {
      this.router.navigate([""]);
    })
  }

}

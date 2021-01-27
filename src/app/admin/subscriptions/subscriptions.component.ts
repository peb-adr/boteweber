import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GroupData, GroupService } from 'src/app/group/group.service';
import { SubscriberData, SubscriberService } from 'src/app/subscriber/subscriber.service';
import { AdminEditableSubscriberComponent } from './editable-subscriber/editable-subscriber.component';

@Component({
  selector: 'app-admin-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class AdminSubscriptionsComponent implements OnInit {

  subscribers: SubscriberData[];
  groups: GroupData[];

  @ViewChild("subscriberPosterElement")
  subscriberPosterElement: AdminEditableSubscriberComponent
  @ViewChildren(AdminEditableSubscriberComponent)
  subscriberElements: QueryList<AdminEditableSubscriberComponent>

  constructor(
      private subscriberService: SubscriberService,
      private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.subscriberService.getSubscribers().toPromise()
    .then((data: SubscriberData[]) => {
      this.subscribers = data;
    })
    this.groupService.getGroups().toPromise()
    .then((data: GroupData[]) => {
      this.groups = data;
    })
  }

  preserveLocalChanges() {
    for (let i = 0; i < this.subscribers.length; i++) {
      let sElement = this.getSubscriberElementById(this.subscribers[i].id);
      if (sElement) {
        if (sElement.isStateUnsynced()) {
          this.subscribers[i] = sElement.data;
        }
        if (sElement.isStateSyncing()) {
          sElement.setStateSynced();
        }
      }
    }
  }
  
  createSubscriber(data: SubscriberData) {
    console.log("sending postSubscriber request")
    this.subscriberService.postSubscriber(data).toPromise()
    .then((newData: SubscriberData) => {
      this.ngOnInit();
    });
  }

  updateSubscriber(data: SubscriberData) {
    console.log("sending putSubscriberId request")
    this.subscriberService.putSubscriberId(data.id, data).toPromise()
    .then((newData: SubscriberData) => {
      // this.ngOnInit();



      // Promise.all([
      //   this.subscriberService.getSubscribers().toPromise()
      //     .then((data: SubscriberData[]) => {
      //       this.subscribers = data;
      //     }),
      //   this.groupService.getGroups().toPromise()
      //     .then((data: GroupData[]) => {
      //       this.groups = data;
      //     })
      //   ])
      //   .then(() => {
      //     let sElement = this.getSubscriberElementById(data.id);
      //     sElement.setStateSynced();
      //     sElement.showEditModal = true;

      //   })
      
    });
  }

  resetSubscriber(data: SubscriberData) {
    console.log("resetting")
    this.ngOnInit();
  }

  deleteSubscriber(data: SubscriberData) {
    console.log("sending deleteSubscriberId request")
    this.subscriberService.deleteSubscriberId(data.id).toPromise()
    .then((newData: SubscriberData) => {
      this.ngOnInit();
    });
  }

  getSubscriberElementById(id: number) {
    return this.subscriberElements.find((item) => { return item.data.id == id });
  }
  
}

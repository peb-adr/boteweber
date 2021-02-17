import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GroupData, GroupService } from 'src/app/group/group.service';
import { SubscriberData, SubscriberService } from 'src/app/subscriber/subscriber.service';
import { AdminPropeditorSubscriberComponent } from '../propeditor-subscriber/propeditor-subscriber.component';

@Component({
  selector: 'app-admin-edit-subscribers',
  templateUrl: './edit-subscribers.component.html',
  styleUrls: ['./edit-subscribers.component.css']
})
export class AdminSubsEditSubscribersComponent implements OnInit {

  subscribers: SubscriberData[] = [];
  subscribersIndexMap: { [key: number]: number; } = {};
  subscribersRenderNames: {id: number, name: string}[] = [];
  allSubscriberIds: number[] = [];

  editedSubscriber: SubscriberData;

  @ViewChild("subscriberPosterElement")
  subscriberPosterElement: AdminPropeditorSubscriberComponent
  @ViewChildren(AdminPropeditorSubscriberComponent)
  subscriberElements: QueryList<AdminPropeditorSubscriberComponent>

  pageSel = 1;
  pagePer = 2;
  
  constructor(
      private subscriberService: SubscriberService,
      private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.getSubscribers();
    this.clearEditedSubscriber();
  }

  getSubscribers() {
    this.subscriberService.getSubscriberIds().toPromise()
    .then((data: number[]) => {
      this.allSubscriberIds = data;
    })
    this.subscriberService.getSubscribers(this.pageSel, this.pagePer).toPromise()
    .then((data: SubscriberData[]) => {
      this.subscribers = data;
      this.makeIndexMap();
      this.makeRenderNames();
    })
  }

  makeIndexMap() {
    for (let i = 0; i < this.subscribers.length; i++) {
      const s = this.subscribers[i];
      this.subscribersIndexMap[s.id] = i;
    }
  }
    
  makeRenderNames() {
    this.subscribersRenderNames.length = 0;
    for (const d of this.subscribers) {
      let s = d.email;
      if (d.name.length > 0) {
        s = d.name + " <" + s + ">";
      }
      this.subscribersRenderNames.push({id: d.id, name: s});
    }
  }
  
  clearEditedSubscriber() {
    this.editedSubscriber = {
      id: -1,
      email: "",
      name: "",
      groups: []
    }
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

  onEditElement(value) {
    console.log(this.allSubscriberIds);
    this.editedSubscriber = this.subscribers[this.subscribersIndexMap[value]];
  }

  onPageSelChanged(sel) {
    this.pageSel = sel;
    this.getSubscribers();
  }

  onPagePerChanged(per) {
    this.pagePer = per;
    this.getSubscribers();
  }
  
}

import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CrudActionPaneComponent } from 'src/app/edit/crud-action-pane/crud-action-pane.component';
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

  @ViewChild(CrudActionPaneComponent)
  crudPane: CrudActionPaneComponent;
  

  pageSel = 1;
  pagePer = 3;
  
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
  
  createSubscriber() {
    console.log("sending postSubscriber request")
    this.subscriberService.postSubscriber(this.editedSubscriber).toPromise()
    .then((newData: SubscriberData) => {
      this.getSubscribers();
      this.crudPane.setStateSynced();
    });
  }

  updateSubscriber() {
    console.log("sending putSubscriberId request")
    this.subscriberService.putSubscriberId(this.editedSubscriber.id, this.editedSubscriber).toPromise()
    .then((newData: SubscriberData) => {
      this.getSubscribers();
      this.crudPane.setStateSynced();
    });
  }

  resetSubscriber() {
    console.log("resetting")
    this.subscriberService.getSubscriberId(this.editedSubscriber.id).toPromise()
    .then((data: SubscriberData) => {
      this.editedSubscriber = data;
      this.crudPane.setStateSynced();
    })
  }

  deleteSubscriber() {
    console.log("sending deleteSubscriberId request")
    this.subscriberService.deleteSubscriberId(this.editedSubscriber.id).toPromise()
    .then((newData: SubscriberData) => {
      this.getSubscribers();
      this.clearEditedSubscriber();
      this.crudPane.setStateSynced();
    });
  }

  onEditElement(value) {
    if (value < 0) {
      this.clearEditedSubscriber();
      return;
    }
    this.editedSubscriber = this.subscribers[this.subscribersIndexMap[value]];
  }

  onEditedDataChanged() {
    this.crudPane.setStateUnsynced();
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

import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CrudActionPaneComponent } from 'src/app/shared/crud-action-pane/crud-action-pane.component';
import { GroupData, GroupService } from 'src/app/services/group/group.service';
import { SubscriberData, SubscriberService } from 'src/app/services/subscriber/subscriber.service';
import { AdminPropeditorSubscriberComponent } from '../propeditor-subscriber/propeditor-subscriber.component';
import { ClickedButton, MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

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
  pagePer = 10;
  pageButtonsMax = 10;
  pageButtonsAdj = 5;

  constructor(
    private subscriberService: SubscriberService,
    private groupService: GroupService,
    private messageModalService: MessageModalService
  ) { }

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

  changePage(sel) {
    this.pageSel = sel;
    this.getSubscribers();
  }

  changePagePer(per) {
    this.pagePer = per;
    this.getSubscribers();
  }

  onEditElement(value) {
    if (value < 0) {
      this.clearEditedSubscriber();
      return;
    }

    // TODO: handle if editedSub unsynced
    
    this.editedSubscriber = this.subscribers[this.subscribersIndexMap[value]];
  }

  onEditedDataChanged() {
    this.crudPane.setStateUnsynced();
  }

  onPageSelChanged(sel) {
    if (this.crudPane.isStateUnsynced()) {
      this.messageModalService.message = `Es sind nicht gespeicherte Änderungen vorhanden\nFortfahren?`
      this.messageModalService.show()
      .subscribe(button => {
        if (button === ClickedButton.CLICK_OK) {
          this.changePage(sel);
        }
      })
    }
    else {
      this.changePage(sel);
    }
  }

  onPagePerChanged(per) {
    if (this.crudPane.isStateUnsynced()) {
      this.messageModalService.message = `Es sind nicht gespeicherte Änderungen vorhanden\nFortfahren?`
      this.messageModalService.show()
      .subscribe(button => {
        if (button === ClickedButton.CLICK_OK) {
          this.changePagePer(per);
        }
      })
    }
    else {
      this.changePagePer(per);
    }
  }
  
}

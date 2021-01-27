import { Component, Input, OnInit } from '@angular/core';
import { SubscriberData } from 'src/app/subscriber/subscriber.service';
import { Synced } from '../../edit/synced.component';

@Component({
  selector: 'app-admin-editable-subscriber',
  templateUrl: './editable-subscriber.component.html',
  styleUrls: [
    './editable-subscriber.component.css',
    '../../edit/synced.component.css'
  ]
})
export class AdminEditableSubscriberComponent extends Synced implements OnInit {

  @Input()
  readonly groupData;
  
  showEditModal = false;
  
  constructor() {
    super();
    this.data = {
      id: -1,
      email: "",
      name: "",
      groups: []
    };
  }
  
  ngOnInit(): void {
  }

  openEditModal() {
    this.showEditModal = true;
  }

  closeEditModal(event) {
    if (event.target.classList.contains('modal')) {
      this.showEditModal = false;
    }
  }

  onNewDataEmail(event) {
    this.data.email = event.target.value;
    this.setStateUnsynced();
  }

  onNewDataName(event) {
    this.data.name = event.target.value;
    this.setStateUnsynced();
  }

  onNewDataGroups(event) {
    let ename = event.target.name;
    let evalue = parseInt(event.target.value);
    if (this.data[ename] == undefined) {
      return;
    }

    if (event.target.checked) {
      if (!this.data[ename].includes(evalue)) {
        this.data[ename].push(evalue)
      }
    }
    else {
      if (this.data[ename].includes(evalue)) {
        this.data[ename] = this.data[ename].filter(
          v => v != evalue
        )
      }
    }
    
    this.setStateUnsynced();
  }
  
  formatName() {
    if (this.isPoster) {
      return "<i>Neuer Abonent</i>"
    }

    return this.data.name + " <" + this.data.email + ">";
  }

}

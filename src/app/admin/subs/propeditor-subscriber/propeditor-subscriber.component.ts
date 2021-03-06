import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupData } from 'src/app/services/group/group.service';
import { getDefaultSubscriberData, SubscriberData } from 'src/app/services/subscriber/subscriber.service';

@Component({
  selector: 'app-admin-propeditor-subscriber',
  templateUrl: './propeditor-subscriber.component.html',
  styleUrls: ['./propeditor-subscriber.component.css']
})
export class AdminPropeditorSubscriberComponent implements OnInit {

  @Input()
  groups: GroupData[];
  @Input()
  data: SubscriberData;
  

  @Output()
  dataChanged = new EventEmitter<void>();
  
  showEditModal = false;
  notSyncedHint = false;
  
  constructor() {
    this.data = getDefaultSubscriberData();
  }
  
  ngOnInit(): void {
  }

  debug(event) {
    console.log(event)
  }

  onNewDataEmail(event) {
    this.data.email = event.target.value;
    this.dataChanged.emit();
  }

  onNewDataName(event) {
    this.data.name = event.target.value;
    this.dataChanged.emit();
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
    
    this.dataChanged.emit();
  }
}

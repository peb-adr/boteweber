import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getDefaultGroupData, GroupData } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-admin-propeditor-group',
  templateUrl: './propeditor-group.component.html',
  styleUrls: ['./propeditor-group.component.css']
})
export class AdminPropeditorGroupComponent implements OnInit {

  @Input()
  data: GroupData;
  

  @Output()
  dataChanged = new EventEmitter<void>();
  
  showEditModal = false;
  notSyncedHint = false;
  
  constructor() {
    this.data = getDefaultGroupData();
  }
  
  ngOnInit(): void {
  }

  debug(event) {
    console.log(event)
  }

  onNewDataName(event) {
    this.data.name = event.target.value;
    this.dataChanged.emit();
  }

  // onNewDataGroups(event) {
  //   let ename = event.target.name;
  //   let evalue = parseInt(event.target.value);
  //   if (this.data[ename] == undefined) {
  //     return;
  //   }

  //   if (event.target.checked) {
  //     if (!this.data[ename].includes(evalue)) {
  //       this.data[ename].push(evalue)
  //     }
  //   }
  //   else {
  //     if (this.data[ename].includes(evalue)) {
  //       this.data[ename] = this.data[ename].filter(
  //         v => v != evalue
  //       )
  //     }
  //   }
    
  //   this.dataChanged.emit();
  // }
}

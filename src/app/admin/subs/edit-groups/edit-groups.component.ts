import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CrudActionPaneComponent } from 'src/app/shared/crud-action-pane/crud-action-pane.component';
import { GroupData, GroupService } from 'src/app/services/group/group.service';
import { AdminPropeditorGroupComponent } from '../propeditor-group/propeditor-group.component';
import { ClickedButton, MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

@Component({
  selector: 'app-admin-edit-groups',
  templateUrl: './edit-groups.component.html',
  styleUrls: ['./edit-groups.component.css']
})
export class AdminSubsEditGroupsComponent implements OnInit {

  groups: GroupData[] = [];
  groupsIndexMap: { [key: number]: number; } = {};
  groupsRenderNames: {id: number, name: string}[] = [];
  allGroupIds: number[] = [];

  editedGroup: GroupData;

  @ViewChild(CrudActionPaneComponent)
  crudPane: CrudActionPaneComponent;
  
  pageSel = 1;
  pagePer = 10;
  pageButtonsMax = 10;
  pageButtonsAdj = 5;

  constructor(
    private groupService: GroupService,
    private messageModalService: MessageModalService
  ) { }

  ngOnInit(): void {
    this.getGroups();
    this.clearEditedGroup();
  }

  getGroups() {
    this.groupService.getGroupIds().toPromise()
    .then((data: number[]) => {
      this.allGroupIds = data;
    })
    this.groupService.getGroups(this.pageSel, this.pagePer).toPromise()
    .then((data: GroupData[]) => {
      this.groups = data;
      this.makeIndexMap();
      this.makeRenderNames();
    })
  }

  makeIndexMap() {
    for (let i = 0; i < this.groups.length; i++) {
      const s = this.groups[i];
      this.groupsIndexMap[s.id] = i;
    }
  }
    
  makeRenderNames() {
    this.groupsRenderNames.length = 0;
    for (const d of this.groups) {
      this.groupsRenderNames.push({id: d.id, name: d.name});
    }
  }
  
  clearEditedGroup() {
    this.editedGroup = {
      id: -1,
      name: "",
      subscribers: []
    }
  }
  
  createGroup() {
    console.log("sending postGroup request")
    this.groupService.postGroup(this.editedGroup).toPromise()
    .then((newData: GroupData) => {
      this.getGroups();
      this.crudPane.setStateSynced();
    });
  }

  updateGroup() {
    console.log("sending putGroupId request")
    this.groupService.putGroupId(this.editedGroup.id, this.editedGroup).toPromise()
    .then((newData: GroupData) => {
      this.getGroups();
      this.crudPane.setStateSynced();
    });
  }

  resetGroup() {
    console.log("resetting")
    this.groupService.getGroupId(this.editedGroup.id).toPromise()
    .then((data: GroupData) => {
      this.editedGroup = data;
      this.crudPane.setStateSynced();
    })
  }

  deleteGroup() {
    console.log("sending deleteGroupId request")
    this.groupService.deleteGroupId(this.editedGroup.id).toPromise()
    .then((newData: GroupData) => {
      this.getGroups();
      this.clearEditedGroup();
      this.crudPane.setStateSynced();
    });
  }

  changePage(sel) {
    this.pageSel = sel;
    this.getGroups();
  }

  changePagePer(per) {
    this.pagePer = per;
    this.getGroups();
  }

  onEditElement(value) {
    if (value < 0) {
      this.clearEditedGroup();
      return;
    }

    // TODO: handle if editedSub unsynced
    
    this.editedGroup = this.groups[this.groupsIndexMap[value]];
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

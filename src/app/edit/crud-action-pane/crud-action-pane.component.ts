import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum SyncState {
  synced,
  unsynced,
  syncing
}

@Component({
  selector: 'app-crud-action-pane',
  templateUrl: './crud-action-pane.component.html',
  styleUrls: ['./crud-action-pane.component.css']
})
export class CrudActionPaneComponent implements OnInit {

  @Input()
  dataId = -1;
  @Input()
  isPoster: boolean = false;
  
  @Output()
  create = new EventEmitter<number>();
  @Output()
  update = new EventEmitter<number>();
  @Output()
  reset = new EventEmitter<number>();
  @Output()
  delete = new EventEmitter<number>();

  syncState: SyncState = SyncState.synced;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickCreate() {
    this.setStateSyncing();
    this.create.emit(this.dataId);
  }
  
  onClickUpdate() {
    this.setStateSyncing();
    this.update.emit(this.dataId);
  }
  
  onClickReset() {
    this.setStateSyncing();
    this.reset.emit(this.dataId);
  }
  
  onClickDelete() {
    this.setStateSyncing();
    this.delete.emit(this.dataId);
  }

  setStateSynced() {
    this.syncState = SyncState.synced;
  }

  setStateUnsynced() {
    this.syncState = SyncState.unsynced;
  }

  setStateSyncing() {
    this.syncState = SyncState.syncing;
  }

  isStateSynced(): boolean {
    return this.syncState == SyncState.synced;
  }

  isStateUnsynced(): boolean {
    return this.syncState == SyncState.unsynced;
  }

  isStateSyncing(): boolean {
    return this.syncState == SyncState.syncing;
  }
}

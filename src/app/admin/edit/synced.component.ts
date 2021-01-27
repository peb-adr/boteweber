import { Component, EventEmitter, Input, Output } from "@angular/core";

enum SyncState {
  synced,
  unsynced,
  syncing
}

@Component({
  template: "",
  styleUrls: ['./synced.component.css']
})
export class Synced {
  
  @Input()
  data;
  
  @Input()
  isPoster: boolean = false;
  syncState: SyncState = SyncState.synced;
  
  @Output()
  create = new EventEmitter();
  @Output()
  update = new EventEmitter();
  @Output()
  reset = new EventEmitter();
  @Output()
  delete = new EventEmitter();
  
  
  onCreate() {
    this.setStateSyncing();
    this.create.emit(this.data);
  }
  
  onUpdate() {
    this.setStateSyncing();
    this.update.emit(this.data);
  }
  
  onReset() {
    this.setStateSyncing();
    this.reset.emit(this.data);
  }
  
  onDelete() {
    this.setStateSyncing();
    this.delete.emit(this.data);
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
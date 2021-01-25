import { Component, EventEmitter, Input, Output } from "@angular/core";

export enum SyncState {
    synced,
    unsynced,
    syncing
}

@Component({
    template: ""
})
export class Synced {
    eSyncState = SyncState;

    @Input()
    data;
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
        this.syncState = SyncState.syncing;
        this.create.emit(this.data);
    }

    onUpdate() {
        this.syncState = SyncState.syncing;
        this.update.emit(this.data);
    }

    onReset() {
        this.syncState = SyncState.syncing;
        this.reset.emit(this.data);
    }

    onDelete() {
        this.syncState = SyncState.syncing;
        this.delete.emit(this.data);
    }

}
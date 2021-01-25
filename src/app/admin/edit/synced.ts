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


    onClickCreate() {
        this.syncState = SyncState.syncing;
        console.log("clicked Create");
        console.log(this.data)
        this.create.emit(this.data);
    }

    onClickUpdate() {
        this.syncState = SyncState.syncing;
        console.log("clicked Update");
        console.log(this.data)
        this.update.emit(this.data);
    }

    onClickReset() {
        this.syncState = SyncState.syncing;
        console.log("clicked Reset");
        console.log(this.data)
        this.reset.emit(this.data);
    }

    onClickDelete() {
        this.syncState = SyncState.syncing;
        console.log("clicked Delete");
        console.log(this.data)
        this.delete.emit(this.data);
    }

}
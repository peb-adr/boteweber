import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";

export interface GroupData {
  id: number;
  name: string;
  subscribers: [number];
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  constructor(private http: HttpClient) { }

  getGroups() {
    return this.http.get<GroupData[]>(backendUrl + "/groups");
  }

  getGroupId(id: number) {
    return this.http.get<GroupData>(backendUrl + "/groups/" + id);
  }

  postGroup(group: GroupData) {
    return this.http.post<GroupData>(backendUrl + "/groups", group);
  }

  putGroupId(id: number, group: GroupData) {
    return this.http.put<GroupData>(backendUrl + "/groups/" + id, group);
  }

  deleteGroupId(id: number) {
    return this.http.delete<GroupData>(backendUrl + "/groups/" + id);
  }

}

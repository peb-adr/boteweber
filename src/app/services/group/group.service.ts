import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { backendUrl } from "src/app/globals";
import { AdminAuthenticationService } from 'src/app/admin/auth/authentication.service';

export interface GroupData {
  id: number;
  name: string;
  subscribers: [number];
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  constructor(
    private http: HttpClient,
    private authenticationService: AdminAuthenticationService
  ) { }

  getGroups() {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.get<GroupData[]>(backendUrl + "/groups", {headers: reqHeaders});
  }

  getGroupId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.get<GroupData>(backendUrl + "/groups/" + id, {headers: reqHeaders});
  }

  postGroup(group: GroupData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.post<GroupData>(backendUrl + "/groups", group, {headers: reqHeaders});
  }

  putGroupId(id: number, group: GroupData) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.put<GroupData>(backendUrl + "/groups/" + id, group, {headers: reqHeaders});
  }

  deleteGroupId(id: number) {
    let reqHeaders = {};
    let adminToken = this.authenticationService.adminToken;
    if (adminToken) {
      reqHeaders['x-access-token'] = adminToken;
    }

    return this.http.delete<GroupData>(backendUrl + "/groups/" + id, {headers: reqHeaders});
  }

}

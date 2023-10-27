import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint);
  }

  addUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.endpoint, user);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.endpoint}/${userId}`;
    return this.httpClient.delete<void>(url);
  }

}

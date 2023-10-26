import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadsetsService {

  endpoint = "http://localhost:8080/headsets";

  constructor(private httpClient: HttpClient) { }

  getHeadsetById(headsetId: number): Observable<any> {
    const url = `${this.endpoint}/${headsetId}`;
    return this.httpClient.get<any>(url);
  }
  
  getHeadset(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.endpoint);
  }

  addHeadset(headset: any): Observable<any> {
    return this.httpClient.post<any>(this.endpoint, headset);
  }

  updateHeadset(headsetId: number, updatedHeadset: any): Observable<any> {
    const url = `${this.endpoint}/${headsetId}`;
    return this.httpClient.put<any>(url, updatedHeadset);
  }

  deleteHeadset(headsetId: number): Observable<void> {
    const url = `${this.endpoint}/${headsetId}`;
    return this.httpClient.delete<void>(url);
  }
}

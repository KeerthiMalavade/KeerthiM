import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor(private Http:HttpClient) { }

  FetchAllData(employees:any):Observable<any>{
return this.Http.get('https://randomuser.me/api/')
  }


  getAllData(employees:any):Observable<any>{
return this.Http.get('https://randomuser.me/api/');
  }
}

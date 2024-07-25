import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/tasks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTaskService {
private _apiUrl = environment.apiUrl;
private _http = inject(HttpClient);
  constructor() { }

  getTasks():Observable<any>{
    return this._http.get(this._apiUrl);
  }

  addTasks(item:any):Observable<any>{
    return this._http.post(this._apiUrl, item);
  }

  updateTasks(id:number,data:any):Observable<any>{
    return this._http.put(`${this._apiUrl}/${id}`,data);
  }


  deleteTasks(id:number):Observable<any>{
    return this._http.delete(`${this._apiUrl}/${id}`);
  }
}

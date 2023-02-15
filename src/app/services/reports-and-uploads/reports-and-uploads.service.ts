import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsAndUploadsService {

  constructor(
    private api: ApiService
  ) { }

  public createP350(data: any): Observable<any> {
    return this.api.post(`/P350`, data)
  }
  
  public getP350File(): Observable<any> {
    return this.api.get(`/P350/GetFilesInfo`)
  }

}

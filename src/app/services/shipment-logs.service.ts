import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentLogsService {

  constructor(private api: ApiService) { }


  public getShipmentLogs(): Observable<any> {
    return this.api.get('/ShipmentLogs')
  }

  getIPKs(): Observable<any> {
    return this.api.get('/IPKs');
  }
}

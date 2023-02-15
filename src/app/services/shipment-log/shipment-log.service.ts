import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentLogService {

  constructor(
    private api: ApiService
  ) { }

  public postShipmentLog(data: any): Observable<any> {
    return this.api.post(`/ShipmentLogs`, data)
  }
  
}

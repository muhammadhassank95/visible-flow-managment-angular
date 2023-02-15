import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private api: ApiService
  ) { }

  public getSigninDatas(): Observable<any> {
    return this.api.get('/signinData')
  }

  public processSignin(data: any): Observable<any> {
    return this.api.post(`/Authenticate/login`, data)
  }

  public registerAdmin(data: any): Observable<any> {
    return this.api.post(`/Authenticate/register-admin`, data)
  }
}

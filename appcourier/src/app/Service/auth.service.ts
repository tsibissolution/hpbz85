import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../Environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpSrvice: HttpClient) {}

  API_URL = Environments.apiUrl;
  inputdata: any;
  GetAll() {
    return this.httpSrvice.get(this.API_URL + 'getAll');
  }

  filterSearch(inputdata: any) {
    
    return this.httpSrvice.post(this.API_URL + 'getFiterData', inputdata);
  }

  updatemRegister(inputdata: any) {
    return this.httpSrvice.patch(this.API_URL + 'updateRegister', inputdata);
  }
  processRegistertion(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'register', inputdata);
  }

  processLogin(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'signin', inputdata);
  }
  IsLoggedIn() {
    return sessionStorage.getItem('token') != null;
  }
  isLoggetout() {
    sessionStorage.clear();
  }
}

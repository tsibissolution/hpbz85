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
  // party
  GetAllParty() {
    return this.httpSrvice.get(this.API_URL + 'getAllPartyRecords');
  }

  createParty(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'createNewParty', inputdata);
  }

  updatePartyRecords(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'updateParty', inputdata);
  }

  
  deleteParty(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'deletePartyRecord', inputdata);
  }

  filterSearchParty(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'getFilterDataParty', inputdata);
  }
  // destinatioina

  GetDestination() {
    return this.httpSrvice.get(this.API_URL + 'getAllDestinations');
  }

  // mraccount

  GetAllMRAccount(){
    return this.httpSrvice.get(this.API_URL + 'getAllMrAccount');
  }

  createMrAccount(inputdata:any){
    return this.httpSrvice.post(this.API_URL + "createMrAccount" , inputdata);
  }
  // company

  GetAllCompany(){
    return this.httpSrvice.get(this.API_URL+'getAllCompany');
  }
  // register
  GetAllMregister() {
    return this.httpSrvice.get(this.API_URL + 'getAllMregister');
  }

  filterSearch(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'getFiterData', inputdata);
  }

  updatemRegister(inputdata: any) {
    return this.httpSrvice.patch(this.API_URL + 'updateMregister', inputdata);
  }

  createmRegister(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'createMregister', inputdata);
  }

  deleteRegister(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'deleteMregister', inputdata);
  }

  processRegistertion(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'register', inputdata);
  }

  processLogin(inputdata: any) {
    return this.httpSrvice.post(this.API_URL + 'getUserLogin', inputdata);
  }
  IsLoggedIn() {
    return sessionStorage.getItem('token') != null;
  }
  isLoggetout() {
    sessionStorage.clear();
  }
}

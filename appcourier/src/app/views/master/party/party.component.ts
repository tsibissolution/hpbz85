import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../Service/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css'],
})
export class PartyComponent {
  partyForm!: FormGroup;
  p: number = 1;
  list: any = [];
  firstna: any;
  lastna: any;
  mobile: any;
  emal: any;
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    this.getListitem();
    this.partyForm = new FormGroup({
      pid: new FormControl('', [Validators.required]),
      Ac_AcNo: new FormControl(''),
      Ac_Group: new FormControl(''),
      Ac_Name: new FormControl('', [Validators.required]),
      Ac_Address1: new FormControl(''),
      Ac_Address2: new FormControl(''),
      Ac_Address3: new FormControl(''),
      Ac_Pin_Code: new FormControl(''),
      Ac_Phone1: new FormControl(''),
      Ac_Phone2: new FormControl(''),
      Ac_Mobile: new FormControl(''),
      Ac_Email: new FormControl(''),
      Ac_C_Person: new FormControl(''),
      Ac_Tin_Number: new FormControl(''),
      Ac_DlNo1: new FormControl(''),
      Ac_DlNo2: new FormControl(''),
      Ac_Pan_No: new FormControl(''),
      Ac_Area: new FormControl(''),
      Ac_Transporter_Code: new FormControl(''),
      Ac_Lock: new FormControl(''),
      Ac_State: new FormControl(''),
      Ac_GST_Number: new FormControl(''),
      Ac_State_Code: new FormControl(''),
      Ac_C_DLNo: new FormControl(''),
      Ac_C_Phone: new FormControl(''),
      Ac_C_Address: new FormControl(''),
      Ac_C_TinNO: new FormControl(''),
      Ac_C_CSTNO: new FormControl(''),
      acacid: new FormControl(''),
      destination: new FormControl(''),
      locking: new FormControl(''),
    });
  }

  getListitem() {
    this.authService.GetAllParty().subscribe((res) => {
      console.log(res);
      return (this.list = res);
    });
  }

  Search(value: any) {

  }
  
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mraccount',
  templateUrl: './mraccount.component.html',
  styleUrls: ['./mraccount.component.css']
})
export class MraccountComponent {

  mrAccForm!: FormGroup;
  formdata: any;
  formlist: any = [];
  showAdd!: boolean;
  showEdit!: boolean;
  p: number = 1;

  ngOnInit(){
    this.mrAccForm = new FormGroup({
      pid: new FormControl('', [Validators.required]),
      acname: new FormControl('', [Validators.required]),
      acaddress1: new FormControl(''),
      acaddress2: new FormControl(''),
      acaddress3: new FormControl(''),
      acpincode: new FormControl(''),
      acmobile: new FormControl(''),
      acemail: new FormControl(''),
      acgstno: new FormControl(''),
      acacid: new FormControl(''),
      destination: new FormControl(''),
      locking: new FormControl(''),
    });
  }

  onUpdateSubmit(){}
  onAddSubmit(){}
  Search(value:any){}
  onAddClicked(){}
}

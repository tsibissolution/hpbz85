import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../Service/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css'],
})
export class PartyComponent {
  @ViewChild('closebutton') closebutton: any;
  partyForm!: FormGroup;
  formdata: any;
  p: number = 1;
  list: any = [];
  firstna: any;
  lastna: any;
  mobile: any;
  emal: any;
  destination: any = [];
  showAdd!: boolean;
  showEdit!: boolean;
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    this.getListitem();
    this.getDestination();
    this.partyForm = new FormGroup({
      pid: new FormControl('', [Validators.required]),
      // Ac_AcNo: new FormControl(''),
      // Ac_Group: new FormControl(''),
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

  getListitem() {
    this.authService.GetAllParty().subscribe((res) => {
      console.log(res);
      return (this.list = res);
    });
  }

  Search(value: any) {}

  getDestination() {
    this.authService.GetDestination().subscribe((res) => {
      console.log(res);
      return (this.destination = res);
    });
  }
  onAddClicked() {
    this.partyForm.reset();
    this.showAdd = true;
    this.showEdit = false;
  }
  onAddSubmit() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Save this Records!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1ba564',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.createParty(this.partyForm.value).subscribe(
          (res) => {
            this.closebutton.nativeElement.click();
            this.getListitem();
            this.partyForm.reset();
            Swal.fire({
              title: 'Saved',
              text: 'Records Saved Successfuly',
              icon: 'success',
            });
            return (this.formdata = res);
          },
          (err) => {
            this.closebutton.nativeElement.click();
            this.partyForm.reset();
            Swal.fire({
              title: 'Error',
              text: err.message,
              icon: 'error',
            });
          }
        );
      } else {
        this.closebutton.nativeElement.click();
        Swal.fire({
          title: 'Error',
          text: 'Records Not Saved',
          icon: 'error',
        });
      }
    });

    console.log(this.partyForm.value);
  }

  onEdit(lists: any) {
    this.partyForm.controls['acname'].setValue(lists.Ac_Name);
    this.partyForm.controls['acaddress1'].setValue(lists.Ac_Address1);
    this.partyForm.controls['acaddress2'].setValue(lists.Ac_Address2);
    this.partyForm.controls['acaddress3'].setValue(lists.Ac_Address3);
    this.partyForm.controls['acpincode'].setValue(lists.Ac_Pin_Code);
    this.partyForm.controls['acmobile'].setValue(lists.Ac_Mobile);
    this.partyForm.controls['acemail'].setValue(lists.Ac_Email);
    this.partyForm.controls['acgstno'].setValue(lists.Ac_GST_Number);
    this.partyForm.controls['destination'].setValue(lists.destination);
    this.partyForm.controls['locking'].setValue(lists.locking);
    this.partyForm.controls['pid'].setValue(lists.pid);
    this.showEdit = true;
    this.showAdd = false;
  }

  onUpdateSubmit() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Update this Records!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1ba564',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.updatePartyRecords(this.partyForm.value).subscribe(
          (res) => {
            this.closebutton.nativeElement.click();
            this.getListitem();
            this.partyForm.reset();
            Swal.fire({
              title: 'Update',
              text: 'Records Update Successfuly',
              icon: 'success',
            });
            return (this.formdata = res);
          },
          (err) => {
            this.closebutton.nativeElement.click();
            this.partyForm.reset();
            Swal.fire({
              title: 'Error',
              text: err.message,
              icon: 'error',
            });
          }
        );
      } else {
        this.closebutton.nativeElement.click();
        Swal.fire({
          title: 'Error',
          text: 'Records Not Updated',
          icon: 'error',
        });
      }
    });

    console.log(this.partyForm.value);
  }
}

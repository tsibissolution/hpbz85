import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../Service/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild('closebutton') closebutton: any;

  mregisterForm!: FormGroup;
  formdata: any;
  p: number = 1;
  firstna: any;
  lastna: any;
  mobile: any;
  emal: any;
  showAdd!: boolean;
  showEdit!: boolean;
  constructor(private http: HttpClient, private authservice: AuthService) {}
  ngOnInit() {
    this.getListitem();
    this.mregisterForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl(''),
      email: new FormControl(''),
      mobileno: new FormControl(''),
      uid: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl(''),
      utype: new FormControl(''),
      status: new FormControl(''),
      log_year: new FormControl(''),
    });
  }

  list: any = [];

  onAddClicked() {
    this.mregisterForm.reset();
    this.showAdd = true;
    this.showEdit = false;
  }

  getListitem() {
    this.authservice.GetAllMregister().subscribe((res) => {
      console.log(res);
      return (this.list = res);
    });
  }

  onEdit(lists: any) {
    this.mregisterForm.controls['firstname'].setValue(lists.firstname);
    this.mregisterForm.controls['lastname'].setValue(lists.lastname);
    this.mregisterForm.controls['email'].setValue(lists.email);
    this.mregisterForm.controls['mobileno'].setValue(lists.mobileno);
    this.mregisterForm.controls['uid'].setValue(lists.uid);
    this.mregisterForm.controls['username'].setValue(lists.username);
    this.mregisterForm.controls['password'].setValue(lists.password);
    this.mregisterForm.controls['cpassword'].setValue(lists.cpassword);
    this.mregisterForm.controls['utype'].setValue(lists.utype);
    this.mregisterForm.controls['status'].setValue(lists.status);
    this.mregisterForm.controls['log_year'].setValue(lists.log_year);
    this.showEdit = true;
    this.showAdd = false;
  }

  onEditSubmit() {
    if (this.mregisterForm.valid) {
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
          this.authservice.updatemRegister(this.mregisterForm.value).subscribe(
            (res) => {
              this.closebutton.nativeElement.click();
              this.getListitem();
              this.mregisterForm.reset();
              Swal.fire({
                title: 'Updated',
                text: 'Records Updated Successfuly',
                icon: 'success',
              });
              return (this.formdata = res);
            },
            (err) => {
              this.closebutton.nativeElement.click();
              this.mregisterForm.reset();
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
    }
    // this.formdata = JSON.stringify(this.mregisterForm.value);
    console.log(this.formdata);
  }
  onAddSubmit() {
    const valueAdd = {
      ...this.mregisterForm.value,
      log_year: +this.mregisterForm.value.log_year,
      status: +this.mregisterForm.value.status,
    };
    console.log(valueAdd);
    if (this.mregisterForm.valid) {
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
          this.authservice.createmRegister(valueAdd).subscribe(
            (res) => {
              this.formdata = res;
              this.closebutton.nativeElement.click();
              this.getListitem();
              this.mregisterForm.reset();
              Swal.fire({
                title: this.formdata.Status,
                text: 'Records Saved Successfuly',
                icon: 'success',
              });
              return (this.formdata = res);
            },
            (err) => {
              this.closebutton.nativeElement.click();
              this.mregisterForm.reset();
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
    } else {
      Swal.fire({
        title: 'Error Posting',
        text: 'Your Form Data Not Valid to Save Records',
        icon: 'error',
      });
    }
  }
  onDeleteAction(lists: any) {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'You want to this Records!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes Delete it!',
      confirmButtonColor: '#7066e0',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.mregisterForm.controls['uid'].setValue(lists.uid);
        this.authservice
          .deleteRegister(this.mregisterForm.value)
          .subscribe((res) => {
            this.getListitem();
            Swal.fire({
              title: 'Delete',
              text: 'Records Deleted Successfully',
              icon: 'success',
            });
            return res;
          });
      }
    });
  }
  filterTerm!: string;
  param: any;
  Search(value: any) {
    if (
      this.firstna == '' &&
      this.lastna == '' &&
      this.mobile == '' &&
      this.emal == ''
    ) {
      this.getListitem();
    } else {
      if (this.firstna == undefined) {
        this.firstna = '';
      }
      if (this.lastna == undefined) {
        this.lastna = '';
      }
      if (this.mobile == undefined) {
        this.mobile = '';
      }
      if (this.emal == undefined) {
        this.emal = '';
      }
      this.param = {
        firstname: this.firstna,
        lastname: this.lastna,
        mobileno: this.mobile,
        email: this.emal,
      };
      console.log(this.param);
      this.authservice.filterSearch(this.param).subscribe((res) => {
        return (this.list = res);
      });
    }
  }
}

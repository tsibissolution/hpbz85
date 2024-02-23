import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Service/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mraccount',
  templateUrl: './mraccount.component.html',
  styleUrls: ['./mraccount.component.css'],
})
export class MraccountComponent {
  @ViewChild('closebutton') closebutton: any;
  mrAccForm!: FormGroup;
  formdata: any;
  formlist: any = [];
  company: any = [];
  showAdd!: boolean;
  showEdit!: boolean;
  p: number = 1;
  mrnam: any;
  comp: any;
  email: any;
  mobile: any;
  mrcty: any;
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    this.getListMRitem();
    this.getListCompany();
    this.mrAccForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      mrname: new FormControl('', [Validators.required]),
      mradd: new FormControl(''),
      mrcity: new FormControl(''),
      mrphone: new FormControl(''),
      mremail: new FormControl(''),
      mrcompid: new FormControl(''),
    });
  }

  getListMRitem() {
    this.authService.GetAllMRAccount().subscribe((res) => {
      console.log(res);
      return (this.formlist = res);
    });
  }

  getListCompany() {
    this.authService.GetAllCompany().subscribe((res) => {
      console.log(res);
      return (this.company = res);
    });
  }

  onEdit(lists: any) {
    this.mrAccForm.controls['mrname'].setValue(lists.mrname);
    this.mrAccForm.controls['mradd'].setValue(lists.mradd);
    this.mrAccForm.controls['mrcity'].setValue(lists.mrcity);
    this.mrAccForm.controls['mrphone'].setValue(lists.mrphone);
    this.mrAccForm.controls['mremail'].setValue(lists.mremail);
    this.mrAccForm.controls['mrcompid'].setValue(lists.mrcompid);
    this.mrAccForm.controls['id'].setValue(lists.id);

    this.showEdit = true;
    this.showAdd = false;
  }

  onUpdateSubmit() {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'You want to Save this Records !',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1ba564',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.updateMrAccount(this.mrAccForm.value).subscribe(
          (res) => {
            this.closebutton.nativeElement.click();
            console.log(this.mrAccForm.value);
            this.getListMRitem();
            this.mrAccForm.reset();
            
            Swal.fire({
              title: 'Update',
              text: 'Records Updated Successfuly',
              icon: 'success',
            });
            return (this.formdata = res);
          },
          (err) => {
            this.closebutton.nativeElement.click();
            this.mrAccForm.reset();
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
          text: 'Records Not Update',
          icon: 'error',
        });
      }
    });
  }
  onAddSubmit() {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'You want to Save this Records !',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#1ba564',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.createMrAccount(this.mrAccForm.value).subscribe(
          (res) => {
            this.closebutton.nativeElement.click();
            this.getListMRitem();
            this.mrAccForm.reset();
            Swal.fire({
              title: 'Saved',
              text: 'Records Saved Successfuly',
              icon: 'success',
            });
            return (this.formdata = res);
          },
          (err) => {
            this.closebutton.nativeElement.click();
            this.mrAccForm.reset();
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
  }

  param:any;
  Search(value: any) {
    if (this.mrnam == undefined) {
      this.mrnam = '';
    }
    if (this.mrcty == undefined) {
      this.mrcty = '';
    } 
    if (this.mobile == undefined) {
      this.mobile = '';
    }
    if (this.email == undefined) {
      this.email = '';
    }
    if (this.mrnam == '' && this.mobile == '' && this.email == '' && this.mrcty == '') {
      this.getListMRitem();
     } else {
          
      this.param = {
        mrname: this.mrnam,
        mrcity: this.mrcty,
        mrphone: this.mobile,
        mremail:this.email
      };
      console.log(this.param);
      this.authService.fiterdataMrAccount(this.param).subscribe((res) => {
        return (this.formlist = res);
      });
    }

  }
  onAddClicked() {
    this.mrAccForm.reset();
    this.showAdd = true;
    this.showEdit = false;
  }
  onDeleteParty(lists: any) {
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
        this.mrAccForm.controls['id'].setValue(lists.id);
        this.authService.deleteMrAccount(this.mrAccForm.value).subscribe((res) => {
          this.getListMRitem();
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
}

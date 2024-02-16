import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mraccount',
  templateUrl: './mraccount.component.html',
  styleUrls: ['./mraccount.component.css']
})
export class MraccountComponent {

  mrAccForm!: FormGroup;
  formdata: any;
  formlist: any = [];
  company: any =[];
  showAdd!: boolean;
  showEdit!: boolean;
  p: number = 1;
constructor(private http: HttpClient, private authService: AuthService ){}
  ngOnInit(){
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

  getListCompany(){
    this.authService.GetAllCompany().subscribe(res =>{
      console.log(res);
      return this.company=res;
    })
  }

  onEdit(lists: any) {
    this.mrAccForm.controls['mrname'].setValue(lists.mrname);
    this.mrAccForm.controls['mradd'].setValue(lists.mradd);
    this.mrAccForm.controls['mrcity'].setValue(lists.mrcity);
    this.mrAccForm.controls['mrphone'].setValue(lists.mrphone);
    this.mrAccForm.controls['mremail'].setValue(lists.mremail);
    this.mrAccForm.controls['mrcompid'].setValue(lists.mrcompid);
   
    this.showEdit = true;
    this.showAdd = false;
  }

  onUpdateSubmit(){}
  onAddSubmit(){}
  Search(value:any){}
  onAddClicked(){
    this.mrAccForm.reset();
    this.showAdd=true;
    this.showEdit= false;
  }
}

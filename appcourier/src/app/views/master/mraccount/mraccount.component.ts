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
    this.getListCompany();
    this.mrAccForm = new FormGroup({
      pid: new FormControl('', [Validators.required]),
      mrname: new FormControl('', [Validators.required]),
      mradd: new FormControl(''),
      mrcity: new FormControl(''),
      mrphone: new FormControl(''),
      mremail: new FormControl(''),
      mrcompid: new FormControl(''),
      
    });
  }

  getListCompany(){
    this.authService.GetAllCompany().subscribe(res =>{
      console.log(res);
      return this.company=res;
    })
  }
  onUpdateSubmit(){}
  onAddSubmit(){}
  Search(value:any){}
  onAddClicked(){}
}

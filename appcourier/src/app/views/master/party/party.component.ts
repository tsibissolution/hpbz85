import { Component, ViewChild } from '@angular/core';

import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
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
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  mregisterForm!: FormGroup;
  constructor(private http: HttpClient, private authservice: AuthService) {}
  ngOnInit() {
    this.authservice.GetAll().subscribe((res) => {
      console.log(res);
      return (this.list = res);
    });
    this.mregisterForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl(''),
      email: new FormControl(''),
      mobileno: new FormControl(''),
      // id: new FormControl(''),
    });
  }

  list: any = [];
  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
    console.log(this.rowData$);
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  // getListitem() {
  //   this.authservice.GetAll().subscribe((res) => {
  //     console.log(res);
  //     return (this.list = res);
  //   });
  // }

  onEdit(lists: any) {
    this.mregisterForm.controls['firstname'].setValue(lists.firstname);
    this.mregisterForm.controls['lastname'].setValue(lists.lastname);
    this.mregisterForm.controls['email'].setValue(lists.email);
    this.mregisterForm.controls['mobileno'].setValue(lists.mobileno);
    // this.mregisterForm.controls['id'].setValue(lists.id);
    console.log(this.mregisterForm.value);
  }
}

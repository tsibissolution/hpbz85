import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private roter: Router
  ) {
    document.body.style.backgroundImage = "url('/assets/images/login.jpg')";
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
  }
  userdata: any;
  errormsg: any;
  loginForm = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });
  ngOnDestroy() {
    document.body.style.backgroundImage = 'none';
    console.log('ChildComponent:OnDestroy');
  }
  processLoginForm() {
    if (this.loginForm.valid) {
      this.authService.processLogin(this.loginForm.value).subscribe(
        (res) => {
          this.userdata = res;
          if (this.userdata.Stat1us === 'Success'){
          sessionStorage.setItem('token', this.userdata.token);
          sessionStorage.setItem('usrname', this.userdata.data[0].username);
          sessionStorage.setItem('name', this.userdata.data[0].firstname +" "+ this.userdata.data[0].lastname);
          sessionStorage.setItem('logyear', this.userdata.data[0].log_year);
          console.log(this.userdata.data);
          // this.toastr.success("Login Successfull", "Login Status");
          this.roter.navigate(['/dashboard']);
          }
          else{
            console.log(this.userdata);
            Swal.fire({
              title: 'Error',
              text: this.userdata.Message,
              icon: 'error',
            });
          }
        }
      );
    } 
  }
}

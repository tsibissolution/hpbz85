import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private builder: FormBuilder, private authService:AuthService, private roter: Router){
    document.body.style.backgroundImage = "url('/assets/images/login.jpg')";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
  }
  userdata: any;
  errormsg: any;
  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });
  ngOnDestroy() {
    
    document.body.style.backgroundImage = "none";
    console.log('ChildComponent:OnDestroy');

  };
  processLoginForm() {

    if (this.loginForm.valid) {

      this.authService.processLogin(this.loginForm.value).subscribe(res => {
        this.userdata = res;
        sessionStorage.setItem("token", this.userdata.token);
        console.log(res);
        // this.toastr.success("Login Successfull", "Login Status");
        this.roter.navigate(['/dashboard'])
      }, error => {
        this.errormsg = error
        console.warn(this.errormsg.error.message);
        // this.toastr.error(this.errormsg.error.message, "Login Status");
      });
    } else {
      // this.toastr.error("Invalid Credentials", "Login Error");
    }
  }

}

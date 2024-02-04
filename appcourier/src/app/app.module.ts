import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayModule } from './layout/display/display.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login/login.component';
import { RegisterComponent } from './views/login/register/register.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbValidationModule  } from 'mdb-angular-ui-kit/validation';
import { AuthHttpInterceptorService } from './Service/auth-http.interceptor.service';
import { ErrorInterceptorService } from './Service/error.interceptor.service';
import { AuthGuardService } from './guard/auth.guard.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisplayModule,
    RouterModule,
    FormsModule,
    MdbValidationModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdbRippleModule,
    MdbFormsModule,
    MdbCheckboxModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    AuthGuardService,],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { AuthService, User } from  '../../services/auth.service';
import {Router} from "@angular/router";
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginMessage = "";
  constructor (private http: HttpClient, 
    private authService: AuthService, 
    private router: Router,  private formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]],
        'password': ['', [Validators.required]]
      });
    }
  
  ngOnInit() {
  }

  login() {
    //if (!this.authService.login(this.user)) {
     //this.routes.navigate(['/addCustomerComponent'])
    //}
    this.authService.login(this.http, this.loginForm.value.email, this.loginForm.value.password)
    .subscribe(
      res => {
        //console.log(res);
        if (res.toString() != "" && res != null) {
          console.log("logged in");
          //console.log( email  + ':' + password);
          console.log(res);
          localStorage.setItem('email', res[0].email);

          console.log(localStorage.getItem('email'));
          this.router.navigate(['/']);
        }
        console.log("unable to login 1");
        this.loginMessage = "Invalid Username/Password";
      },
      error => {
        console.log("unable to login 2");
        this.loginMessage = "Invalid Username/Password";
      }
    );
      
    }

}

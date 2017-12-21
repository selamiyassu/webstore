import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  email: string;
  password: string;
}

const USERS: User[] = [
  {email: 'user', password: '123'}
];

@Injectable()
export class AuthService {

  users: User[] = USERS;
  session: boolean;

  constructor(private router: Router ) {
    this.session = false;
  }

  login(http: HttpClient, email: string, password: string) {
    /*const user_exist = this.users.find(u => u.email === user.email);

    if (user_exist && user_exist.password === user.password) {
      localStorage.setItem('user', JSON.stringify(user_exist));
      this.session = true;

      this.router.navigate(['/']);
    }*/
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    
    const url = 'http://localhost:3000/customers/authenticate';
    const params = JSON.stringify({email: email, password: password});
    console.log("tryn to logged in");
    return http.post(url, params, {'headers': headers});

  }

  logout() {
    this.session = false;
    localStorage.removeItem('email');
    this.redirect();
  }

  redirect() {
    this.router.navigate(['/login']);
  }

  check() {
    if (localStorage.getItem('user') === null) {
      this.session = false;
      this.redirect();
    } else {
      this.session = true;
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('email') === null) {
        return false;
    } else {
      return true;
    }
  }

  getSession() {
    if(localStorage.getItem('email') && localStorage.getItem('email') != "" ){
      this.session = true;
      return this.session;
    }
    return false;
  }

  user() {
    return localStorage.getItem('user');
  }

}

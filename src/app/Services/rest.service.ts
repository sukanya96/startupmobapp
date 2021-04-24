import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Register,Login, Getquote, Payment,Forgot} from '../Models/class';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest,HttpEvent } from '@angular/common/http';
const endpoint = 'http://localhost:4000/'
@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions:any;
  url: any;

    constructor(private http: HttpClient, private myRoute: Router) { }
    private extractData(res: Response) {
      let body = res;
      return body || { };
   }



   sendToken(token: string) {
     localStorage.setItem("LoggedInUser", token)
   }
   getToken() {
    //localStorage.removeItem("LoggedInUser");

    return localStorage.getItem("LoggedInUser");
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("LoggedInUserId");
    localStorage.removeItem("LoggedInRole");

    localStorage.removeItem("name");

    this.myRoute.navigate[('/dashboard')];

  }

  sendRole(role){
    localStorage.setItem("LoggedInRole", role)
  }
  getRole(){
    return localStorage.getItem("LoggedInRole");
  }
  sendId(id){
    localStorage.setItem("LoggedInUserId", id)
  }
  getId(){
    return localStorage.getItem("LoggedInUserId");
  }
  Register(data: Register): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
          })
    };
      return this.http.post<Register>(endpoint + 'api/auth/signup' , data,this.httpOptions);
   }

   login(data: Login): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',

          })
    };
      return this.http.post<Login>(endpoint + 'api/auth/signin' , data,this.httpOptions);
   }

  //  Updateprofile(data: Register): Observable<any> {
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json' ,
  //         'x-access-token': this.getToken()
  //         })
  //   };
  //     return this.http.put<Register>(endpoint + 'api/file/profileupdate' ,data, this.httpOptions);
  //  }

 userprofile(): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': this.getToken()
        })
  };

  return this.http.get<any>(endpoint + 'api/userview', this.httpOptions);
}

forgot(data:Forgot): Observable<any>{
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
 })
  };
  return this.http.put<any>(endpoint + 'api/UpdateNewPassword' ,data, this.httpOptions);
}

addQuote(data: Getquote): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'x-access-token': this.getToken()
        })
  };
    return this.http.post<Getquote>(endpoint + 'api/getquote' , data,this.httpOptions);
 }

 addpayment(data: Payment): Observable<any> {
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'x-access-token': this.getToken()
        })
  };
    return this.http.post<Payment>(endpoint + 'api/payment' , data,this.httpOptions);
 }



}


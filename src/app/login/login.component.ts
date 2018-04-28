import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Password: number;
  Email: string;
  constructor( private  apiservice: ServiceService  ) { }

  ngOnInit() {
  }

  login() {
    this.Password = this.Password;
    this.Email = this.Email;
    const loginData = { email: this.Email, password: this.Password };
     console.log(loginData);
     this.apiservice.LoginUser(loginData).subscribe( res => {
       console.log(res.json());
       if ( res.json().message === 'ok email and  password  correct') {
         localStorage.setItem('TokenUser', res.json().token);
       }
     });
  }
}

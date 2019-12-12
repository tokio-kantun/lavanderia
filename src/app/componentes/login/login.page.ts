import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email: string;
password: string;
  constructor(private AuthService: AuthService, public router: Router) { }

  ngOnInit() {

  }
OnSubmitLogin()
{
  this.AuthService.login(this.email, this.password).then(res =>{
    this.router.navigate(['/inicio']);
  }).catch(err => alert("el usuario no existe o los datos son incorrectos"))
}

}
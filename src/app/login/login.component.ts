import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/login/auth.service';
import { Usuario } from './usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  
  @Input()titulo;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

  
}

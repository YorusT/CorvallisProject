import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordVisible = false;
  email?:string;
  password?:string;
  constructor() { }

  toggleVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  ngOnInit(): void {
  }

}

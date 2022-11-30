import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username=""
  password=""

  constructor(private routes:Router){}

  readValue=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    
    }
    console.log(data)

    if (data.username=="user" && data.password=="password") {
      this.routes.navigate(['/bookentry'])
      
    } else {
      alert("invalid login credentials")
      
    }



    
  }

}

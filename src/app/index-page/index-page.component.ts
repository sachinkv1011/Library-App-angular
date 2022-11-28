import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {
  username=""
  password=""

  readValues=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)


    if (data.username=="admin" && data.password=="12345") {
      alert("valid credentials")
      
    } else {
      alert("invalid login")
      
    }
  }

}

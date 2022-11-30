import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {
  username=""
  password=""
  
 constructor(private route:Router){}

  readValues=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)


    if (data.username=="admin" && data.password=="12345") {
      this.route.navigate(['/bookentry'])
      
    } else {
      alert("invalid login")
      
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name=""
  aadhar=""
  address=""
  pincode=""
  dob=""
  email=""
  phoneno=""
  username=""
  password=""
  confirmpassword=""

  readValues=()=>
  {
    let data:any={
      "name":this.name,
      "aadhar":this.aadhar,
      "address":this.address,
      "pincode":this.pincode,
      "dob":this.dob,
      "email":this.dob,
      "phoneno":this.phoneno,
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.confirmpassword

    }
    console.log(data)
  }

}

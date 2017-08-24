import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http : Http) { }

  sendData (name,password,email,phoneNo)
  {
    return this.http.post('http://localhost:3002/user/signUp',
    {
      name:name,
    password:password,
    email:email, 
    phoneNo:phoneNo
  }
);
   }

   fetchData()
   {
     return this.http.get('http://localhost:3002/user/getUserData').map(
       (res)=>res.json()
     )
   }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent  {
  form : FormGroup;

  constructor( public fb: FormBuilder) {
    this.form  = this.fb.group({
      firstname : '',
      lastname : '',
      password  :'',
        username :  ''
    })
  }



}

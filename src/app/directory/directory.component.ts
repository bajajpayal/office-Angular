import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers : [DataService ]
})
export class DirectoryComponent implements OnInit {

  settings = {
    columns: {
      phoneNo: {
        title: 'id'
      },
      name: {
        title: 'Full Name'
      },
      password: {
        title: 'Password'
      },
      email: {
        title: 'Email'
      }
    }
  };

  arrays = [];
  constructor(private dataservice : DataService ) {}
   

  ngOnInit() {
   this.dataservice.fetchData().subscribe(
      (data)=>
      {
        this.arrays = data;
        console.log(data);
      }
    )
    console.log(this.arrays);
    }

  submitData (name,password,email,phoneNo)
  {
    this.arrays.push({phoneNo:phoneNo, email: email, password : password , name : name})
    console.log(name,password,email,phoneNo);
    this.dataservice.sendData(name,password,email,phoneNo).subscribe();
  }

}

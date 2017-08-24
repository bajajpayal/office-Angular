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

  arrays = [];
  constructor(private dataservice : DataService ) {}
   

  ngOnInit() {
    this.arrays.push(this.dataservice.fetchData().subscribe()); 
  }

  submitData (name,password,email,phoneNo)
  {
    console.log(name,password,email,phoneNo);
    this.dataservice.sendData(name,password,email,phoneNo).subscribe();
  }

}

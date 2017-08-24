import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  log()
  {
    alert ('log in successful');
  }
  constructor() { }

}

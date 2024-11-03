import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public showDeatils = new Subject<string>()
  public patientDetails = new Subject<any>()

  constructor() { }
}

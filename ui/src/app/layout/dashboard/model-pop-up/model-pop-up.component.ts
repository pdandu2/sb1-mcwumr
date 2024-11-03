import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-model-pop-up',
  templateUrl: './model-pop-up.component.html',
  styleUrls: ['./model-pop-up.component.scss'],
})
export class ModelPopUpComponent implements OnInit {
  @Input() value ?:any;
  public output= 'pratap'
 
 
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.value)
  }
  selectUser():void {
    this.modalController.dismiss(this.output, this.value);
  }
  
}

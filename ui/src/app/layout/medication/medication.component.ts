import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { AlertController, NavParams, PopoverController, ToastController } from '@ionic/angular';

import { MedicationService } from './medication.service';

@Component({
	selector: 'app-medication',
	templateUrl: './medication.component.html',
	styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {

	medicines: any;

	constructor(private medicationService: MedicationService, private popoverController: PopoverController) { }

	ngOnInit() {
		this.getMedicines();
	}

	getMedicines() {
        this.medicationService.getMedicines().subscribe(response => {
			this.medicines = response;
			console.log(this.medicines);
		});
    }

    async openMedicinePopover(newMedicine: boolean, medicine: any) {
		const popover = await this.popoverController.create({
			component: MedicinePopoverComponent,
			componentProps: { newMedicine, medicine },
			cssClass: 'medicine-popover',
			backdropDismiss: false
		});
		popover.onDidDismiss().then((result: any) => {
			if (result.data != null && result.data.changed) {
				if (newMedicine) {
					medicine = result.data.medicine;
					this.medicines.unshift(medicine);
				}
				/*this.itemService.saveItem(result.data.item).subscribe((event: HttpEvent<any>) => {
					switch (event.type) {
		                case HttpEventType.Sent:
		                    item.showSpinner = true;
		                    break;
		                case HttpEventType.Response:
							this.showToast('Item ' + (newItem ? 'saved' : 'updated') + ' successfully');
							item.id = event.body.id;
							item.type = event.body.type;
			            	item.name = event.body.name;
				            item.hsnOrSac = event.body.hsnOrSac;
				            item.gst = event.body.gst;
				            item.price = event.body.price;
							item.imported = event.body.imported;
		                    item.showSpinner = false;
		                    break;
					}
				},
		        () => {
					this.items.splice(this.items.indexOf(item), 1);
					this.filteredItems = this.items;
		            item.showSpinner = false;
		        });*/
			}
		});
		await popover.present();
	}

	async openOptionPopover(event: any, medicine: any) {
		const popover = await this.popoverController.create({
			event,
			component: OptionPopoverComponent,
			cssClass: 'option-popover'
		});
		popover.onDidDismiss().then((result: any) => {
			if (result.data !== null && result.data !== '') {
				if (result.data === 'edit') {
					this.openMedicinePopover(false, medicine);
				}
				if (result.data === 'delete') {
					//this.openConfirmationAlert(medicine);
				}
			}
		});
		await popover.present();
	}
}


@Component({
    selector: 'app-medication-medicine-popover',
    templateUrl: './medicine-popover.html'
})
export class MedicinePopoverComponent implements OnInit {

	newMedicine: boolean;
	medicine: any;

    constructor(private navParams: NavParams, private popoverController: PopoverController, private formBuilder: UntypedFormBuilder) { }

	ngOnInit() {
		this.medicine = this.formBuilder.group({
			id: [ null ],
			name: [ null ],
			composition: [ null ],
            dosage: [ null ],
            startDate: [ null ],
			endDate: [ null ],
			precautions: [ null ],
			comments: [ null ]
        });

		if (!this.newMedicine) {
			this.medicine.patchValue(this.navParams.data.medicine);
		}
	}

	medicineChanged(changed: boolean) {
		this.popoverController.dismiss({ changed, medicine: this.medicine.value });
	}
}

@Component({
    selector: 'app-medication-option-popover',
    templateUrl: './option-popover.html'
})
export class OptionPopoverComponent {

    constructor(private popoverController: PopoverController) { }

	optionSelected(option: string) {
		this.popoverController.dismiss(option);
	}
}

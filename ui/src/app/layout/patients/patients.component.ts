import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModelPopUpComponent } from '../dashboard/model-pop-up/model-pop-up.component';
import { LayoutService } from '../layout.service';

@Component({
	selector: 'app-patients',
	templateUrl: './patients.component.html',
	styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

	public filtereddata =[];
	public patientsData = [
		
		{
			PatientID: '7982492900098',
			PatientName: 'Elon Musk',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900099',
			PatientName: 'Biden',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900100',
			PatientName: 'Trump',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900101',
			PatientName: 'Clinton',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900102',
			PatientName: 'Obama',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900103',
			PatientName: 'Michele',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900004',
			PatientName: 'Vin Desel',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900005',
			PatientName: 'Tim Cook',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900006',
			PatientName: 'Steve Jobs',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900007',
			PatientName: 'Laary Page',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900008',
			PatientName: 'Jeff',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900009',
			PatientName: 'Nedd',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		},
		{
			PatientID: '7982492900006',
			PatientName: 'Steve Jobs',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			Doc:''
		}
	];

	constructor(private router: Router, private actRoute: ActivatedRoute, private layoutService: LayoutService,private modalController: ModalController) { }

	ngOnInit() { this.filtereddata = this.patientsData;
	this.layoutService.patientDetails.subscribe((value)=>{
	});
}

public tesing = true;

	public searchPatientsData(key: string) {
		this.filtereddata = this.patientsData

		this.filtereddata = this.filtereddata.filter((res) => {
			return res.PatientName.toLowerCase().indexOf(key.toLowerCase()) > -1;
		});
		console.log(this.filtereddata);

	}

	showPatientDetails(value : string){
		this.layoutService.showDeatils.next(value);

	}

	async assign(value:any){
		const modal = await this.modalController.create({  
			component: ModelPopUpComponent,
			componentProps: {
				'value': value, // data can be passed from here to modal component @Input
			  }
		  }); 
		  modal.onDidDismiss().then((data) => {
			this.assignDoc(data['data'], data['role'])

		});
		  return await modal.present();  
	}

	private assignDoc(docName:string, patentdetails:any){
		patentdetails.Doc = docName;
	}

}

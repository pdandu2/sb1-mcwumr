import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { StorageService } from '../../shared/service/storage.service';
import { LayoutService } from '../layout.service';
import { ModelPopUpComponent } from './model-pop-up/model-pop-up.component';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public filtereddata =[];
	public patientsData = [
		
		{
			PatientID: '7982492900098',
			PatientName: 'Elon Musk',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 1,
			SoapNotesneeded : 1,
			Documentneeded : 1,
			ispreception: 1
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Biden',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 7,
			SoapNotesneeded : true,
			Documentneeded : 2,
			ispreception: true
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Trump',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 2,
			SoapNotesneeded : true,
			Documentneeded : 3,
			ispreception: true
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Clinton',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 5,
			SoapNotesneeded : true,
			Documentneeded : 4,
			ispreception: true
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Obama',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 6,
			SoapNotesneeded : true,
			Documentneeded : 5,
			ispreception: true
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Michele',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 4,
			SoapNotesneeded : true,
			Documentneeded : 6,
			ispreception: true
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Vin Desel',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png',
			doc: 'Dr.Pratap',
			isValid: false,
			messages : 3,
			SoapNotesneeded : true,
			Documentneeded : 7,
			ispreception: true
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Tim Cook',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png'
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Steve Jobs',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png'
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Laary Page',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png'
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Jeff',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png'
		},
		{
			PatientID: '7982492900098',
			PatientName: 'Nedd',
			PatientGender: 'Male',
			Age: 32,
			PhoneNumber: '7539458934',
			PatientAvatar: 'avatar-finn.png'
		}
	];

	public actionItemsData = [
		
		{
			disorders: 'WHO-5',
			Content1: 'The 5-item World Health Organization Well-Being Index (WHO-5) is among the most widely used questionnaires assessing subjective psychological well-being. Since its first publication in 1998, the WHO-5 has been translated into more than 30 languages and has been used in research studies all over the world. We now provide a systematic review of the literature on the WHO-5. ',
			Content2: 'Methods: We conducted a systematic search for literature on the WHO-5 in PubMed and PsycINFO in accordance with the PRISMA guidelines. In our review of the identified articles, we focused particularly on the following aspects: (1) the clinimetric validity of the WHO-5; (2) the responsiveness/sensitivity of the WHO-5 in controlled clinical trials; (3) the potential of the WHO-5 as a screening tool for depression, and (4) the applicability of the WHO-5 across study fields.',
			Content3: 'Results: A total of 213 articles met the predefined criteria for inclusion in the review. The review demonstrated that the WHO-5 has high clinimetric validity, can be used as an outcome measure balancing the wanted and unwanted effects of treatments, is a sensitive and specific screening tool for depression and its applicability across study fields is very high.',
			
			
		},
		{
			disorders: 'PHQ-9',
			Content1: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one daily activities Examples of anxiety disorders include panic attacks, obsessive-compulsive disorder, and post-traumatic stress disorder.',
			Content2: 'Symptoms include stress thats out of proportion to the impact of the event, inability to set aside a worry, and restlessness. Treatment includes counseling or medications, including antidepressants.',
			Content3: '',
			Questions:{

			}
			
		}
	]
	role = '';
	
	constructor(
		private modalController: ModalController,
		private storageService: StorageService,
		private layoutService: LayoutService
	) { 
	}	

	ngOnInit() {
		this.storageService.get('role').then((value: any) => {
			this.role = value;
		});
		this.filtereddata = this.patientsData
	}

	public searchPatientsData(key: string) {
		this.filtereddata = this.patientsData
		this.filtereddata = this.filtereddata.filter((res) => {
			return res.PatientName.toLowerCase().indexOf(key.toLowerCase()) > -1;
		})

	}
public click(value:any){
	this.layoutService.patientDetails.next(value);

}
	public filterPatients(type: string) {
		this.filtereddata = this.patientsData
		this.filtereddata = this.filtereddata.filter((res) => {
			return res[type] > 0;
		});
		this.filtereddata = this.filtereddata.sort((n1, n2) => (n1[type] < n2[type]) ? 1 : -1);

		console.log(this.filtereddata);

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
		patentdetails.doc = docName;
		console.log(patentdetails);
		console.log(this.filtereddata, this.patientsData);



	}

	
}

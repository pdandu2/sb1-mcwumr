import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from '../layout.service';
import { OverviewService } from './overview.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	providers: [OverviewService]
})
export class OverviewComponent implements OnInit {

	patient: any;
	patientName = 'Elon Musk';
	user: any;
	segment: string;

	public basicInfoFg = this.formBuilder.group({
		name: ['', Validators.compose([Validators.required])],
		dob: ['', Validators.compose([Validators.required])],
	});

	public familyInfoFg = this.formBuilder.group({
		name: ['', Validators.compose([Validators.required])],
		dob: ['', Validators.compose([Validators.required])],
	});

	constructor(private readonly overviewService: OverviewService,
		private formBuilder: UntypedFormBuilder,
		private layoutService: LayoutService) { }

	ngOnInit() {
		this.segment = 'Basic_Info';
		this.segment = 'Family_Info';

		this.getpatient_details();

		this.layoutService.showDeatils.subscribe((value) => {
			console.log('value-->', value)

			setTimeout(() => {
				this.patientName = value;
				console.log('patientName-->', this.patientName)
			}, 5000);

		});

		this.basicInfoFg.valueChanges.subscribe(() => {
			if (this.basicInfoFg.status === 'VALID') {
				this.enable = true;
			}

		})

		this.familyInfoFg.valueChanges.subscribe(() => {
			if (this.familyInfoFg.status === 'VALID') {
				this.enable = true;
			}

		})

	}
	public enable = false;
	getpatient_details() {
		this.overviewService.getPatientOverview().subscribe((response) => {
			this.patient = response;

		});

	}

	segmentChanged() {

	}

	public submitinfo() {
		console.log('overViewfg-->', this.basicInfoFg);
	}


	public submitfamilyinfo() {
		console.log('overViewfg-->', this.familyInfoFg);
	}
}
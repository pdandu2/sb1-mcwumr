import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-administration',
	templateUrl: './administration.component.html',
	styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

	segment: string;

	constructor() { }

	ngOnInit() { 
		this.segment = 'patient';
	}

	segmentChanged(){
		
	}
}

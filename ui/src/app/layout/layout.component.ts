import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { StorageService } from '../shared/service/storage.service';
import { LayoutService } from './layout.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

//	title = '';
	role = '';
	urls = ['/layout/dashboard', '/layout/patients', '/layout/search', '/layout/administration'];
	showPatientMenu = false;
    patientName = '';

	constructor(private router: Router, private storageService: StorageService,
		private layoutService: LayoutService) { }

	ngOnInit() {
		this.storageService.get('role').then((value: any) => {
			this.role = value;
			if (this.role === 'ROLE_PATIENT') {
				this.showPatientMenu = true;
			} else if (this.role === 'ROLE_DOCTOR') {
				this.showPatientMenu = false;
			}
		});
        this.layoutService.showDeatils.subscribe((value)=>{
            this.patientName = value;
        });
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
//			this.title = event.url.substring(event.url.lastIndexOf('/') + 1);
			if (this.urls.includes(event.url) && this.role === 'ROLE_DOCTOR') {
				this.showPatientMenu = false;
			} else {
				this.showPatientMenu = true;
			}
		});
     }

     signout() {
		this.storageService.clear();
		this.router.navigate(['/signin']);
	}
}

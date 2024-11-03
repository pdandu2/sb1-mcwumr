import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { StorageService } from '../shared/service/storage.service';
import { SigninService } from './signin.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: [ './signin.component.scss' ]
})
export class SigninComponent implements OnInit {

    user: any;

    constructor(private router: Router, private formBuilder: UntypedFormBuilder,
		private storageService: StorageService, private signinService: SigninService) { }

    ngOnInit() {
        this.user = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required]
        });

        //this.user.setValue({ username: 'doctor@mail.com', password: 'doctor' });
        this.user.setValue({ username: 'patient@mail.com', password: 'patient' });
    }

    signin() {
		if (this.user.value.username === 'doctor@mail.com' && this.user.value.password === 'doctor') {
			this.storageService.save('role', 'ROLE_DOCTOR');
		} else if (this.user.value.username === 'patient@mail.com' && this.user.value.password === 'patient') {
			this.storageService.save('role', 'ROLE_PATIENT');
		}
		this.router.navigate(['layout/dashboard']);
    }

    registration() {
		this.router.navigate(['/registration']);
	}
}

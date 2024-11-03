import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { RegistrationService } from './registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent implements OnInit {

    user: any;

    constructor(private router: Router, private formBuilder: UntypedFormBuilder,
		private registrationService: RegistrationService) { }

    ngOnInit() {
        this.user = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.email])],
            mobile: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.user.setValue({ username: 'demo@mail.com', mobile: '1234567890', password: 'demo' });
    }

    register() {
		this.router.navigate(['/signin']);
    }

    sigin() {
		this.router.navigate(['/signin']);
	}
}

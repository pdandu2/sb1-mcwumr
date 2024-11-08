import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-sessions',
	templateUrl: './sessions.component.html',
	styleUrls: ['./sessions.component.scss']
})


export class SessionsComponent implements OnInit {
	@Input('endIcon') endIcon = "ionic";
	items = [
		{
		  title: 'Courgette daikon',
		  content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
		  icon: 'calendar',
		  time: {subtitle: '4/16/2013', title: '21:30'}
		},
		{
		  title: 'Courgette daikon',
		  content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
		  icon: 'calendar',
		  time: {subtitle: 'January', title: '29'}
		},
		{
		  title: 'Courgette daikon',
		  content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
		  icon: 'calendar',
		  time: {title: 'Short Text'}
		}
	  ]
	constructor() { }

	ngOnInit() { }
}


@Component({
	selector: 'timeline',
	template: '<ng-content></ng-content>'
})
export class TimelineComponent {
	constructor() {

	}
}

@Component({
	selector: 'timeline-item',
	template: '<ng-content></ng-content>'
})
export class TimelineItemComponent {
	constructor() {

	}
}

@Component({
	selector: 'timeline-time',
	template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
})
export class TimelineTimeComponent {
	@Input('time') time = {};
	constructor() {

	}
}

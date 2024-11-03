import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	@ViewChild('IonContent', { static: true }) content: IonContent
	paramData: any;
	msgList: any;
	userName: any;
	user_input: string = "";
	User: string = "Me";
	toUser: string = "HealthBot";
	start_typing: any;
	loader: boolean;

	constructor() {
		this.paramData = 'Finn';
		this.userName = 'Super Man';

		this.msgList = [
			{
				userId: "HealthBot",
				userName: "HealthBot",
				userAvatar: "../../assets/chat/chat4.jpg",
				time: "12:00",
				message: "Hello, have you seen this great chat UI",
				id: 0
			},
			{
				userId: "Me",
				userName: "Me",
				userAvatar: "../../assets/chat/chat5.jpg",
				time: "12:03",
				message: "Yeah, I see pagas this. This looks great. ",
				id: 1,
			},
			{
				userId: "HealthBot",
				userName: "HealthBot",
				userAvatar: "../../assets/chat/chat4.jpg",
				time: "12:05",
				message: "this is absolutely great UI chat themes, anyone can use",
				id: 3
			},
			{
				userId: "Me",
				userName: "Me",
				userAvatar: "../../assets/chat/chat5.jpg",
				time: "12:06",
				message: "wow ! that's great. Love to see more of such chat themes",
				id: 4
			},
			{
				userId: "HealthBot",
				userName: "HealthBot",
				userAvatar: "../../assets/chat/chat4.jpg",
				time: "12:07",
				message: "Oh there are several other designs. Check all their designs on their website enappd.com",
				id: 5
			}
		];
	}

	ngOnInit() { }
}

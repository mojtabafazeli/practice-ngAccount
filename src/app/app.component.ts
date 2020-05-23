import { Component, VERSION, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
	providers: []
})
export class AppComponent implements OnInit {
	accounts: { name: string; status: string }[] = [];

	constructor(private accountService: AccountsService) {}

	ngOnInit() {
		this.accounts = this.accountService.accounts;
	}
}

import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
	selector: 'app-new-account',
	templateUrl: './new-account.component.html',
	styleUrls: [ './new-account.component.css' ],
	providers: []
})
export class NewAccountComponent {
	constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
		this.accountsService.statusUpdate.subscribe((status: string) => alert(status));
	}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountsService.addAccount(accountName, accountStatus);
	}
}

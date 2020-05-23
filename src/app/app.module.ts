import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, AccountComponent, NewAccountComponent ],
	providers: [ AccountsService, LoggingService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

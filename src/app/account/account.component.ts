import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service'; //1
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]  //2
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  } //3

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //console.log('A server status changed, new status: ' + status);
    //this.loggingService.logStatusChange(status); //4
    this.accountsService.statusUpdated.emit(status);
  }
}

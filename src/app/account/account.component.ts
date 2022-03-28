import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service'; //1
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]  //2
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService) {} //3

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status); //4
  }
}

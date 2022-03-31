import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  // loadedFeature = 'recipe';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}// Inject the service into the constructor

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}

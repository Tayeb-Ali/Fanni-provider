import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment-details',
  templateUrl: './appoinment-details.page.html',
  styleUrls: ['./appoinment-details.page.scss'],
})
export class AppoinmentDetailsPage implements OnInit {
  tabButton = 'main';
  constructor() { }

  ngOnInit() {
  }

  tabs(){
    switch (this.tabButton) {
      case 'main':
        break;

      case 'problem':
        break;
    }
  }
}

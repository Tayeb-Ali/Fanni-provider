import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public navController: NavController) { }

  // public homePage() {
  //   this.navController.navigateForward('tabs/home');
  // }

  // public notificationsPage() {
  //   this.navController.navigateForward('tabs/notifications');
  // }

  // public ratingReviewPage() {
  //   this.navController.navigateForward('tabs/rating-review');
  // }

  // public profilePage() {
  //   this.navController.navigateForward('tabs/profile');
  // }
}

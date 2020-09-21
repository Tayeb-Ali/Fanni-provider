import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoinmentDetailsPageRoutingModule } from './appoinment-details-routing.module';

import { AppoinmentDetailsPage } from './appoinment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppoinmentDetailsPageRoutingModule
  ],
  declarations: [AppoinmentDetailsPage]
})
export class AppoinmentDetailsPageModule {}

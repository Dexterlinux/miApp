import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppPageRoutingModule } from './my-app-routing.module';

import { MyAppPage } from './my-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppPageRoutingModule
  ],
  declarations: [MyAppPage]
})
export class MyAppPageModule {}

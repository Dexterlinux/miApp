import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAppPage } from './my-app.page';

const routes: Routes = [
  {
    path: '',
    component: MyAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAppPageRoutingModule {}

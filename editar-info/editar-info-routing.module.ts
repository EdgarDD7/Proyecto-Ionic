import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarInfoPage } from './editar-info.page';

const routes: Routes = [
  {
    path: '',
    component: EditarInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarInfoPageRoutingModule {}

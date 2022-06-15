import { BrandAddComponent } from './components/pages/brand-add/brand-add.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrantEditComponent } from './components/pages/brant-edit/brant-edit.component';

const routes: Routes = [
  {
    path: 'brand-edit',
    component: BrantEditComponent,
  },
  {
    path: 'brand-add',
    component: BrandAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

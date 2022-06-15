import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './common/brand-list/brand-list.component';
import { NaviComponent } from './common/navi/navi.component';
import { BrantEditComponent } from './components/pages/brant-edit/brant-edit.component';
import { BrandAddComponent } from './components/pages/brand-add/brand-add.component';

@NgModule({
  declarations: [AppComponent, BrandListComponent, NaviComponent, BrantEditComponent, BrandAddComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

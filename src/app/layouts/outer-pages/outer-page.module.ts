import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OuterPageRoutingModule } from './outer-page-routing.module';
import { CommonModule } from '@angular/common';
import { OuterPageComponent } from './outer-page/outer-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared-module';
import { ForgotPasswordComponent } from 'src/app/components/pages/outer-pages/forgot-password/forgot-password.component';
import { ZorroModule } from 'src/app/shared/zorro-module';

@NgModule({
  declarations: [
    OuterPageComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    OuterPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ZorroModule
  ],
  exports: []
})
export class OuterPageModule { }

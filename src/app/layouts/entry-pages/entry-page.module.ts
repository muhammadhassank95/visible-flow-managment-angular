import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninComponent } from 'src/app/components/pages/entry-pages/signin/signin.component';
import { ZorroModule } from 'src/app/shared/zorro-module';
import { EntryPageComponent } from './entry-page.component';
import { EntryPageRoutingModule } from './entry-page.routing.module';
import { SharedModule } from 'src/app/shared/shared-module';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@NgModule({
  declarations: [
    SigninComponent,
    EntryPageComponent,
  ],
  imports: [
    CommonModule,
    EntryPageRoutingModule,
    RouterModule,
    FormsModule,
    ZorroModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    LoaderComponent
  ],
})
export class EntryPageModule { }

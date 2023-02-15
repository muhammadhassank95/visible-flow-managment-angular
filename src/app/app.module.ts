import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZorroModule } from './shared/zorro-module';
import { EntryPageModule } from './layouts/entry-pages/entry-page.module';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroModule,
    EntryPageModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OuterPageComponent } from './outer-page/outer-page.component';
import { ForgotPasswordComponent } from 'src/app/components/pages/outer-pages/forgot-password/forgot-password.component';

const routes: Routes = [{
  path: '',
  component: OuterPageComponent,
  children: [
    { path: 'forgotPassword', redirectTo: 'forgotPassword', pathMatch: 'full' },
    { path: 'forgotPassword', component: ForgotPasswordComponent, pathMatch: 'full', canActivate: [], data: { title: 'Forgot Password' } },
    { path: 'forgotPassword/:uuid/:token/:name', component: ForgotPasswordComponent, canActivate: [], pathMatch: 'full', data: { title: 'Forgot Password' } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuterPageRoutingModule { }

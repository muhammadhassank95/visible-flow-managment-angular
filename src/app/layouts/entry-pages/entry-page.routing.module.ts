import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from 'src/app/components/pages/entry-pages/signin/signin.component';
import { EntryPageComponent } from './entry-page.component';

const routes: Routes = [{
    path: '',
    component: EntryPageComponent,
    children: [
        { path: '', redirectTo: 'signin', pathMatch: 'full' },
        { path: 'signin', component: SigninComponent,  pathMatch: 'full', data: { title: 'Sign in' } },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EntryPageRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerPageComponent } from './inner-page.component';
import { UserAdminPanelComponent } from 'src/app/components/pages/inner-pages/user-admin-panel/user-admin-panel.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { KanbanComponent } from 'src/app/components/pages/inner-pages/kanban/kanban.component';

const routes: Routes = [{
    path: '',
    component: InnerPageComponent,
    // canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'board', pathMatch: 'full' },
        { path: 'board', component: KanbanComponent, pathMatch: 'full', data: { title: 'Board' } },
        { path: 'user-admin-panel', component: UserAdminPanelComponent, pathMatch: 'full', data: { title: 'User Admin Panel' } },
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InnerPageRoutingModule { }

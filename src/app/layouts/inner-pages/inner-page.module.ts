import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/components/pages/partials/header/header.component';
import { NavigationMenuComponent } from 'src/app/components/pages/partials/navigation-menu/navigation-menu.component';
import { ZorroModule } from 'src/app/shared/zorro-module';
import { SharedModule } from 'src/app/shared/shared-module';
import { InnerPageComponent } from './inner-page.component';
import { InnerPageRoutingModule } from './inner-page.routing.module';
import { UserAdminPanelComponent } from 'src/app/components/pages/inner-pages/user-admin-panel/user-admin-panel.component';
import { UserEditModalComponent } from 'src/app/components/modal/user-edit-modal/user-edit-modal.component';
import { DeleteModalComponent } from 'src/app/components/modal/delete-modal/delete-modal.component';
import { KanbanComponent } from 'src/app/components/pages/inner-pages/kanban/kanban.component';

@NgModule({
  declarations: [
    InnerPageComponent,
    HeaderComponent,
    UserAdminPanelComponent,
    UserEditModalComponent,
    DeleteModalComponent,
    NavigationMenuComponent,
    KanbanComponent
  ],
  imports: [
    CommonModule,
    InnerPageRoutingModule,
    RouterModule,
    FormsModule,
    ZorroModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [],
})
export class InnerPageModule { }

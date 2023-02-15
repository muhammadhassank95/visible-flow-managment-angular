import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  imports: [
  ],
  exports: [
    NzInputModule,
    NzIconModule,
    NzPopoverModule,
    NzModalModule,
    NzSelectModule,
    NzCheckboxModule,
    NzTagModule,
    NzSpinModule,
    NzNotificationModule
  ],
})
export class ZorroModule {
}

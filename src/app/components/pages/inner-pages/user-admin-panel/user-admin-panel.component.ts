import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserEditModalComponent } from 'src/app/components/modal/user-edit-modal/user-edit-modal.component';
import { DeleteModalComponent } from 'src/app/components/modal/delete-modal/delete-modal.component';
import { UsersService } from 'src/app/services/users/users.service';
import { ColDef, RowSelectedEvent, ValueGetterParams } from 'ag-grid-community';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserRoleCellRendererComponent } from 'src/app/services/user-role-cell-renderer/user-role-cell-renderer.component';

@Component({
  selector: 'app-user-admin-panel',
  templateUrl: './user-admin-panel.component.html',
  styleUrls: ['./user-admin-panel.component.scss']
})
export class UserAdminPanelComponent implements OnInit {

  @ViewChild('addEdituser') public addEdituser!: UserEditModalComponent;
  @ViewChild('deleteUser') public deleteUserModal!: DeleteModalComponent;
  public rowData: any;
  public frameworkComponents: any;
  public rowSelection: 'single' | 'multiple' = 'single';
  public selectedUser: any;
  public columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true,
  };

  constructor(
    private router: Router,
    private usersService: UsersService,
    public nzNotificationService: NzNotificationService
  ) { }


  ngOnInit(): void {
    this.getUsers();
    this.setColDefs();
  }

  public setColDefs(): void {
    this.columnDefs = [
      {
        headerCheckboxSelection: false,
        checkboxSelection: true,
        field: `name`,
        headerName: 'Full Name',
        maxWidth: 400,
      },
      { field: 'email', maxWidth: 400 },
      {
        field: 'roles', headerName: 'Module(s)',
        cellRenderer: UserRoleCellRendererComponent,
      },
    ];
  }

  onGridReady(params: any): void { }

  onModelUpdated(params: any): void {
    params.api.sizeColumnsToFit();
  }


  onRowSelected(params: any) {
    if (params?.api?.getSelectedRows()?.length > 0) {
      this.selectedUser = params?.api?.getSelectedRows()[0];
    } else {
      this.selectedUser = null;
    }
    this.addEdituser.data.selectedUser = this.selectedUser;
  }

  navigateTo(route: any) {
    if (route == '/logout') {
      localStorage.removeItem('access-token');
      this.router.navigateByUrl('/signin');
    } else {
      this.router.navigateByUrl(route);
    }
  }

  public goToHome(): void {
    this.router.navigateByUrl("/board");
  }

  public getUsers(): void {
    this.usersService.getAllUsers().subscribe((response: any) => {
      this.rowData = response;
      // this.userCount = this.rowData.length
    })
  }

  public addUser() {
    this.addEdituser.data.title = 'Add User'
    this.addEdituser.isVisible = true;
    this.addEdituser.data.isEdit = false;
  }

  emitter() {
    this.getUsers()
  }

  public editUser(): void {
    if (this.selectedUser) {
      this.addEdituser.data.title = 'Edit User'
      this.addEdituser.isVisible = true;
      this.addEdituser.data.isEdit = true;
      this.addEdituser.data.selectedUser = this.selectedUser;
      this.addEdituser.initializeEditFormGroup();
    }
  }

  public resetPassword(): void {
    if (this.selectedUser) {
      this.usersService.forgotPassword(this.selectedUser.email).subscribe((response: any) => {
        this.nzNotificationService.create(
          'success',
          'Reset Password',
          `Reset password link has been sent to ${this.selectedUser.email}`,
          {
            nzPlacement: 'bottomRight'
          }
        )
      });
    }
  }

  public deleteUserClicked(): void {
    if (this.selectedUser) {
      this.deleteUserModal.data.title = 'Delete User'
      this.deleteUserModal.isVisible = true;
      this.deleteUserModal.data.selectedUser = this.selectedUser;
    }
  }

  public deleteUserEmitter(): void {
    this.usersService.deleteUser(this.selectedUser.id).subscribe((response: any) => {
      if (response.status == 'Success') {
        this.deleteUserModal.isVisible = false;
        this.getUsers();
        this.nzNotificationService.create(
          'success',
          'Delete User',
          response.message,
          {
            nzPlacement: 'bottomRight'
          }
        )
      }
    })
  }
}

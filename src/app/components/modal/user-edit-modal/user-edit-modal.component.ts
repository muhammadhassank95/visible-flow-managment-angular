import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from "src/app/services/users/users.service";

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UserEditModalComponent implements OnInit {
  @Output('addUserOutput') addUserOutput: EventEmitter<any> = new EventEmitter();

  public formGroup!: FormGroup;
  public userName: string = '';
  public isAdmin: boolean = false;
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public userRoles: string[] = [];
  public allModules: string[] = ["Planner", "Shipment Log", "Process Tracker", "Shipment Reconciliation"];
  public selectedModules: string[] = [];
  public isVisible = false;
  public isConfirmLoading = false;
  public listOfOption = ['Planner', 'Shipment Log', 'Process Tracker', 'Shipment Reconciliation'];
  public listOfSelectedValue: string[] = [];
  public selectedTags: string[] = [];
  public modulesColorAndName: Array<any> = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
  public data = {
    title: '',
    isEdit: false,
    selectedUser: {
      id: '',
      name: '',
      email: '',
      roles: []
    }
  };

  constructor(
    private usersService: UsersService,
  ) {

  }

  ngOnInit(): void {
    this.initializeFormgroup();
    this.initializeUserModuleNameProperty();
  }

  public initializeUserModuleNameProperty(): void {
    this.modulesColorAndName = [
      { name: 'Planner', color: 'bg-[#EB7C7C]' },
      { name: 'Shipment Log', color: 'bg-[#6191B9]' },
      { name: 'Process Tracker', color: 'bg-[#78AD24]' },
      { name: 'Shipment Reconciliation', color: 'bg-[#FFBA00]' },
    ]
  }

  public initializeFormgroup(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      roles: new FormArray([
        new FormGroup({
          name: new FormControl('Planner'),
          isSelected: new FormControl(false),
          // color: new FormControl('bg-[#EB7C7C]')
        }),
        new FormGroup({
          name: new FormControl('Shipment Log'),
          isSelected: new FormControl(false),
          // color: new FormControl('bg-[#6191B9]')
        }),
        new FormGroup({
          name: new FormControl('Process Tracker'),
          isSelected: new FormControl(false),
          // color: new FormControl('bg-[#78AD24]')
        }),
        new FormGroup({
          name: new FormControl('Shipment Reconciliation'),
          isSelected: new FormControl(false),
          // color: new FormControl('bg-[#FFBA00]')
        }),
      ]),
      isAdmin: new FormControl(false)
    })
  }

  public initializeEditFormGroup(): void {
    if( this.data.selectedUser.roles){
      this.userRoles = this.data.selectedUser.roles;
    }
    if (this.data.isEdit) {
      if(this.userRoles.includes('Admin') ){
        this.isAdmin = true;
      } else {
        this.isAdmin = false
      }
      const response = { //sample data for edit user
        name: this.data?.selectedUser?.name,
        email: this.data?.selectedUser?.email,
        isAdmin: this.isAdmin,
        roles: this.data?.selectedUser?.roles
      }
      const arrayControl = this.formGroup.get('roles') as FormArray;
      this.formGroup.get('name')?.patchValue(response.name);
      this.formGroup.get('email')?.patchValue(response.email);
      this.formGroup.get('isAdmin')?.patchValue(this.isAdmin);
      arrayControl.clear();


      let modulePush: any;
      this.modulesColorAndName.forEach((module, i: number) => {
          modulePush = new FormGroup({
            name: new FormControl(this.allModules[i]),
            isSelected: new FormControl(false),
          })
        this.selectedTags.push(module.name)
        arrayControl.push(modulePush)
      })

      response.roles.forEach((role) => {
        if(role === 'Planner' || role === 'Shipment Log' || role === 'Process Tracker' ||  role === 'Shipment Reconciliation'){
          let index: number = this.getModulesFormArray.controls.findIndex((x: any) =>
            x.value.name == role
          )

          this.getModulesFormArray.controls[index].get('isSelected')?.patchValue(true)
        }
      })

    }
  }

  public get getModulesFormArray(): FormArray {
    return this.formGroup.get('roles') as FormArray;
  }

  public handleChange(checked: boolean, tag: string, index: number): void {
    const arrayControl = this.formGroup.get('roles') as FormArray;
    if (checked) {
      this.selectedTags.push(tag);
      arrayControl.at(index).get('isSelected')?.patchValue(true);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
      arrayControl.at(index).get('isSelected')?.patchValue(false);
    }
  }

  public compareWithFunction(item1: any, item2: any) {
    return item1 && item2 ? item1.name === item2.name : item1 === item2;
  }

  public getColor(index: number): any {
    return this.modulesColorAndName[index];
  }

  public updateUser(): void {
    if (this.formGroup.status === 'VALID') {
      let rolesAsPerPayload: any[] = [];
      if (this.formGroup?.value?.isAdmin){
        rolesAsPerPayload.push('Admin')
      }
      this.formGroup?.value?.roles?.forEach((mod: any) => {
        if (mod.isSelected) {
          rolesAsPerPayload.push(mod.name);
        }
      });

      const payload = {
        userId: this.data.selectedUser.id,
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        roles: rolesAsPerPayload, // BRYAN TO CHECK
      }
      this.usersService.updateUser(payload).subscribe((res: any) => {
        if(res.status === 'Success') {
          this.addUserOutput.emit(res);
          this.isVisible = false;
        }
      }, error => {
        console.error('ERROR');
        // this.isVisible = false;
      });
    }
  }

  public submitUser(): void {
    if (this.formGroup?.status === 'VALID') {
      let rolesAsPerPayload: any[] = [];
      if (this.formGroup?.value?.isAdmin){
        rolesAsPerPayload.push('Admin')
      }
      this.formGroup?.value?.roles?.forEach((mod: any) => {
        if (mod.isSelected) {
          rolesAsPerPayload.push(mod.name);
        }
      });
      const payload = {
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        roles: rolesAsPerPayload
      }
      this.usersService.inviteUser(payload).subscribe((res: any) => {
        if(res.status === 'Success') {
          this.addUserOutput.emit(res);
          this.isVisible = false;
        }
      }, error => {
        console.error('ERROR');
      });
    }
  }

  public editUser(): void {
  }

  public modalClose(): void {
    this.initializeFormgroup()
  }

  public closeModalClicked(): void {
    this.isVisible = false;
  }

  public showModal(): void {
    this.isVisible = true;
  }

  public onAdminCheck(event: any) {
    this.isAdmin = !this.isAdmin;
  }


}

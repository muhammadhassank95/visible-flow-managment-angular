import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-user-role-cell-renderer',
  templateUrl: './user-role-cell-renderer.component.html',
  styleUrls: ['./user-role-cell-renderer.component.scss']
})
export class UserRoleCellRendererComponent implements OnInit {
  roles: string[] = [];
  isAdmin: boolean = false;
  isPlanner: boolean = false;
  isShipmentLog: boolean = false;
  isProcessTracker: boolean = false;
  isShipmentReconciliation: boolean = false;

  constructor() { }

  agInit(params: ICellRendererParams): void{
    this.roles = params.value;
    this.roles = this.roles.filter(n => n !== 'User');
    this.checkRoles();

  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  checkRoles(){
    if(this.roles?.includes('Admin')){
      this.isAdmin = true;
    }
    if(this.roles?.includes('Planner')){
      this.isPlanner = true;
    }
    if(this.roles?.includes('Shipment Log')){
      this.isShipmentLog = true;
    }
    if(this.roles?.includes('Process Tracker')){
      this.isProcessTracker = true;
    }
    if(this.roles?.includes('Shipment Reconciliation')){
      this.isShipmentReconciliation = true;
    }
  }

}

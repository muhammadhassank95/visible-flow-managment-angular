import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Output('on-delete-emit') public onDeleteEmitter = new EventEmitter();
  public modalCategory = '';
  public isConfirm: boolean = false;
  public isVisible = false;
  public data = {
    title: '',
    selectedUser: {
      id: '',
      name: '',
      email: '',
      isAdmin: false,
      roles: []
    }
  };
  constructor(

  ) {

  }

  ngOnInit(): void {
  }

  public onConfirmClick(isConfirm: boolean) {
    this.isConfirm = isConfirm;
    this.closeModalClicked(this.isConfirm)
  }

  public closeModalClicked(isConfirm: boolean) {
    this.isVisible = false;
  }

  public confirmDelete(): void {
    this.onDeleteEmitter.emit()
  }

  public modalClose() {

  }

}

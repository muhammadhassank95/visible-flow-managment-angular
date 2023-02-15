import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-requirement',
  templateUrl: './file-requirement.component.html',
  styleUrls: ['./file-requirement.component.scss']
})
export class FileRequirementComponent implements OnInit {

  public isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public closeModalClicked(): void {
    this.isVisible = false;
  }

}

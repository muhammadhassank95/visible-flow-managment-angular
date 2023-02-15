import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  public loading!: boolean;

  @Input('isLoading') isLoading!: boolean;
  @Input('isUploadSuccess') isUploadSuccess: boolean = false;

  constructor(public loaderService: LoaderService) {
    this.loaderService.getState().subscribe((response: any) => {
      setTimeout(() => {
        this.loading = response;
      }, 0)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public isLogin: boolean = false;

  constructor(
    private router: Router
  ) {
    this.validateRoute();
  }

  ngOnInit(): void {

  }

  public validateRoute(): void {
    if(this.router.url == '/signin'){
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
  

}

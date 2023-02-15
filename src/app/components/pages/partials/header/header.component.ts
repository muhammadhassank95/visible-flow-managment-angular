import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  public optionList: any;
  public visible: boolean = false;
  public userRoles = JSON.parse(localStorage.getItem('user-roles')!);
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.optionList = [
      { id: 1, name: 'User Admin Panel', route: '/user-admin-panel' },
      { id: 2, name: 'Logout', route: '' },
    ]
    // if (this.userRoles.includes('Admin')) {
    //   this.optionList = [
    //     { id: 1, name: 'User Admin Panel', route: '/user-admin-panel' },
    //     { id: 2, name: 'Report & Uploads', route: '/reports' },
    //     { id: 3, name: 'Logout', route: '' },
    //   ]
    // } else {
    //   this.optionList = [
    //     { id: 1, name: 'Report & Uploads', route: '/reports' },
    //     { id: 2, name: 'Logout', route: '' },
    //   ]
    // }
  }

  public navigateTo(route: string) {
    this.visible = false;
    if (route == '') {
      this.router.navigateByUrl('/signin');
      localStorage.clear();
    }
    else {
      this.router.navigateByUrl(route);
    }
  }
}

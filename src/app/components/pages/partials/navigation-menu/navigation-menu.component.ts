import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  public userRoles = JSON.parse(localStorage.getItem('user-roles')!);
  @Input() isHeader = true;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public navigateTo(route: string) {
    if (route === '') return;
    this.router.navigateByUrl(route);
  }
}

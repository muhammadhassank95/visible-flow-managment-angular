import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private router: Router
    ) {
        this.validateRoles();
    }

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token: string | null = localStorage.getItem('access-token') || null;

        if (token === null) this.redirectToSignIn();

        try {

        } catch {
            this.redirectToSignIn();
            alert('Invalid token')
        }
        return true;
    }

    public redirectToSignIn(): void {
        this.router.navigateByUrl('/signin')
    }

    public validateRoles(): void {
        const userRoles = JSON.parse(localStorage.getItem('user-roles')!);
        if (!userRoles.includes('Shipment Log') && ['/IPKs', '/shipment-log'].includes(window.location.pathname)) {
            this.router.navigateByUrl('**');
        }
    }
}

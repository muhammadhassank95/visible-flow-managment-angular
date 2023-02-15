import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { delay, Observable, of, Subscription } from "rxjs";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
    public user: any;
    public timeout: any;
    public authToken: any;
    public jwtHelper = new JwtHelperService();
    public tokenSubscription = new Subscription();
    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authorization = localStorage.getItem('access-token')
        let isTokenExpired: any = localStorage.getItem('access-token');
        debugger;
        if (!excludedUrl.includes(new URL(req.url).pathname) && this.jwtHelper.isTokenExpired(isTokenExpired)) this.logout();
        const authHeaders = { Authorization: `Bearer ${authorization}` }
        const request: HttpRequest<any> = req.clone({
            setHeaders: {
                ...authHeaders
            }
        });
        return next.handle(request)
    }

    logout() {
        this.router.navigateByUrl('/');
        localStorage.clear();
    }
}

const excludedUrl = ['/api/Authenticate/SendCode', '/api/Authenticate/ValidateCode']
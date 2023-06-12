import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from "@angular/router";
import { Observable, Subscription, catchError, filter, map, of, take, tap } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private authService: SocialAuthService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true
        /*
        let myObservable: Observable<boolean> = this.authService.authState.pipe(
         map((socialUser: SocialUser) => {
            return !!socialUser;;
         }),
         catchError((error) => {
           return of(false);
         }),
       );
       let loggedIn = false
       myObservable.subscribe((value: boolean) => {
        loggedIn = value
      });
        if(loggedIn){
            return true
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }*/
        
        }
    }

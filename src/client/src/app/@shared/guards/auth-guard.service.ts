import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private readonly router: Router) {
    }

    async canActivate(): Promise<boolean> {
        const isAuthenticated = true;

        if (!isAuthenticated) {
            await this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}

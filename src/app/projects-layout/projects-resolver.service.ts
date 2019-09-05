import { WordpressService } from './../wordpress.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<any> {

    constructor(private ws: WordpressService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.ws.getProjects().pipe(
            map((data: any) => {
                return data.posts;
            })
        );
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

    constructor(private http: HttpClient) {
        this.getProjects();
    }

    public getProjects() {
        const params = new HttpParams()
                            .set('order', 'DESC')
                            .set('order_by', 'date')
                            .set('category', 'projects');

        return this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/dshell321.wordpress.com/posts/', { params});
    }


}

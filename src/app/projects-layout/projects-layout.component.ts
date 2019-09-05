import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mymi-projects-layout',
  templateUrl: './projects-layout.component.html',
  styleUrls: ['./projects-layout.component.scss']
})
export class ProjectsLayoutComponent implements OnInit {
    projects = new BehaviorSubject<any[]>([]);

    constructor(private route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.projects.next(data.projects);
        });
    }

    getFeaturedImage(project) {
        return this._sanitizer.bypassSecurityTrustStyle(`url(${project.featured_image})`);
    }
}

import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './route-animations';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { WordpressService } from './wordpress.service';

@Component({
  selector: 'mymi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      slideInAnimation
  ]
})
export class AppComponent implements OnInit {
    title = 'mymi-web';

    constructor(private router: Router, private wp : WordpressService) {}

    ngOnInit(): void {
        this.wp.getPosts();

        this.router.events.subscribe((evt) => {
            //console.log(evt);

            if (!(evt instanceof NavigationStart)) {
                return;
            }
            document.getElementById("global-container").scrollTo(0, 0);
        });
    }
}

import { Directive, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';

@Directive({
    selector: '[mymiHero]'
})
export class HeroDirective implements OnDestroy {
    eventSubscription : Subscription;

    scrollContainer;
    lastScrollTop;
    lastScrollForce;
    isScrolling;

    constructor(private el : ElementRef) {
        this.scrollContainer = document.getElementById('global-container');
        this.lastScrollTop = this.scrollContainer.scrollTop;
        this.eventSubscription = fromEvent(this.scrollContainer, 'scroll').subscribe(e => {
            this.onScroll(e);
        });
    }

    onScroll(e) {
        let scrollType = this.scrollContainer.scrollTop > this.lastScrollTop ? 'down' : 'up';

        // When scrolling in and out of the viewport
        if (this.isInViewport()) {
            if (scrollType === 'down' && !(this.lastScrollForce === 'down')) {
                this.lastScrollForce = 'down';
                this.el.nativeElement.nextSibling.scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (scrollType === 'up' && !(this.lastScrollForce === 'up')) {
                this.lastScrollForce = 'up';
                this.scrollContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }

        this.lastScrollTop = this.scrollContainer.scrollTop;

        // Detects if stopped scrolling halfway through Hero
        window.clearTimeout(this.isScrolling);
        this.isScrolling = setTimeout(() => {
            if (this.isInViewport()) {
                if (this.lastScrollForce === 'down') {
                    this.el.nativeElement.nextSibling.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else if (this.lastScrollForce === 'up') {
                    this.scrollContainer.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        }, 25);
    }

    isInViewport() {
        let bounding = this.el.nativeElement.getBoundingClientRect();
        return bounding.bottom > 0;
    }

    ngOnDestroy(): void {
        this.eventSubscription.unsubscribe();
    }
}

import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {

  private breakpointObserver = inject(BreakpointObserver);
  isDarkThemeActive: boolean = false;
  isComponentBeingRouted: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  ngOnInit(): void {
    this.checkDarkThemeActive();
    this.onChange(true);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isComponentBeingRouted = true;
      }
    });

    if(this.router.routerState.snapshot.url !== '/navigation') {
          this.isComponentBeingRouted = true;
    }
  }

  ngOnDestroy() {

  }

  onChange(newValue: boolean):void {
    if(newValue) {
      this.document.body.classList.add('dark-mode');
      this.isDarkThemeActive = true;
    } else {
      this.document.body.classList.remove('dark-mode');
      this.isDarkThemeActive = false;
    }
  }

  checkDarkThemeActive() {
    if(this.document.body.classList.contains('dark-mode')) {
      this.isDarkThemeActive = true;
    } else {
      this.isDarkThemeActive = false;
    }
  }



}

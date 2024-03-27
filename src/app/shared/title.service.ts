import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService implements OnDestroy{

  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  ngOnDestroy(): void {
  }

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
  }

}

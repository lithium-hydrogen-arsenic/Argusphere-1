import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }


  private searchQuerySubject = new BehaviorSubject<any>('');
  public searchQueryObservable = this.searchQuerySubject.asObservable();
  setSearchQuery(searchQuery: any): void {
    this.searchQuerySubject.next(searchQuery);
  }
}

import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchText='';
  constructor(private sharedDataService: SharedDataService){}
  updateSearchQuery(){
    this.sharedDataService.setSearchQuery(this.searchText);
  }

}

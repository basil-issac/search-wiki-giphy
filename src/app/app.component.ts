import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-wiki-giphy';
  searchText: string = '';

  search() {
    console.log("Searching " + this.searchText + "...");
  }
}

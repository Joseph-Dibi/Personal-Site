import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Joseph DiBiasi\'s Portfolio';
  hideContentAboutMe = false;

  showAboutMe() {
  if (this.hideContentAboutMe === false) {
    this.hideContentAboutMe = true;
  } else {
    this.hideContentAboutMe = false;
  }
  }
}

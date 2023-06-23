import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isActive = false;
  inputValue = 'Email';

  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Mitko2', age: 22 },
    { name: 'Mitko3', age: 23 },
    { name: 'Mitko4', age: 24 },
  ];

  handleClick(e: Event): void {
    this.isActive = !this.isActive;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-random-icon',
  templateUrl: './random-icon.component.html',
  styleUrls: ['./random-icon.component.css']
})
export class RandomIconComponent {
  iconClass = 'fas fa-question';
  icons = [
    'fas fa-heart',
    'fas fa-star',
    'fas fa-thumbs-up',
    'fas fa-grin-beam',
    'fas fa-flag',
    'fas fa-lightbulb',
    'fas fa-bell',
    'fas fa-envelope',
    'fas fa-user',
    'fas fa-music',
  ];

  onClick() {
    this.iconClass = 'fas fa-spinner fa-spin';
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.icons.length);
      this.iconClass = this.icons[randomIndex];
    }, 3000);
  }
}

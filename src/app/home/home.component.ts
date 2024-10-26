import { Component, signal } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
  selector: 'home',
  standalone: true,
  imports: [MatTabGroup, MatTab],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }
}

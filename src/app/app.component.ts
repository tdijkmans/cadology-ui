import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule
  ]
})
export class AppComponent {
  title = 'cadology-ui';
}

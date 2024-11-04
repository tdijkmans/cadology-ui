import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LapdataComponent } from "./components/lapdata/lapdata.component";
import { DataService } from './services/data.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, LapdataComponent]
})
export class AppComponent {
  title = 'cadology-ui';
  items: Observable<Object> = new Observable();

  constructor(
    private d: DataService
  ) {
  }

  ngOnInit() {
    this.items = this.d.getItems();

  }
}

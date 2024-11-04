import { Component } from '@angular/core';
import { BarChartModule, LineChartModule } from '@swimlane/ngx-charts';

@Component({

  selector: 'app-lapdata',
  standalone: true,
  imports: [LineChartModule, BarChartModule],
  templateUrl: './lapdata.component.html',
  styleUrl: './lapdata.component.scss'
})
export class LapdataComponent {

  view: [number, number] = [700, 400]; // Adjust view size as needed

  // Chart color scheme
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // Data for laps
  lapData = [
    {
      "name": "Lap 1",
      "value": 5
    },
    {
      "name": "Lap 2",
      "value": 4.5
    },
    {
      "name": "Lap 3",
      "value": 5.2
    },
    {
      "name": "Lap 4",
      "value": 4.8
    }
  ];

  // Data for speed records
  speedData = [
    {
      "name": "Record 1",
      "value": 25
    },
    {
      "name": "Record 2",
      "value": 28
    },
    {
      "name": "Record 3",
      "value": 24
    }
  ];
}

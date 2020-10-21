import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title = 'Sin Titulo';
  // tslint:disable-next-line: no-input-rename
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // tslint:disable-next-line: no-input-rename
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
 public colors: Color[] = [
{backgroundColor: ['#9E120E', '#FF5800', 'FFB414']}
 ];
  constructor() { }

  ngOnInit(): void {
  }

}

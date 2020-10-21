import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels2: string[] = ['Download Compras', 'In-Store Compras', 'Mail-Order Compras'];
  public labels3: string[] = ['Download Ahorro', 'In-Store Ahorro', 'Mail-Order Ahorro'];
  public labels4: string[] = ['Download Inventario', 'In-Store Inventario', 'Mail-Order Inventario'];
  public data1: number[] = [250, 150, 100];
  public data2: number[] = [350, 450, 200];
  public data3: number[] = [150, 350, 300];
  public data4: number[] = [550, 250, 400];
  constructor() { }

  ngOnInit(): void {
  }

}

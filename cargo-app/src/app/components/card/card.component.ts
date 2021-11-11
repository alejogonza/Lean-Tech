import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string = "";
  @Input() temp: string = "";
  @Input() description: string = "";
  @Input() icon: string = "";
  unit: string = "C";
  
  constructor() { }

  ngOnInit(): void {}

  transformUnit(unit: string) {
    this.unit = unit
  }
}

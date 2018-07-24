import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ky-puan',
  templateUrl: './puan.component.html',
  styleUrls: ['./puan.component.css']
})
export class PuanComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

 @Output() ratingClicked:EventEmitter<string>= new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Puan  ${this.rating} dir.`);
  }
}

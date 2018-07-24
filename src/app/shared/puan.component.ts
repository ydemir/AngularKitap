import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'ky-puan',
    templateUrl: './puan.component.html',
    styleUrls: ['./puan.component.css']
})

export class PuanComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        console.log(this.rating);
        this.starWidth = this.rating * 75 / 5;
        console.log(this.starWidth);
    }
}
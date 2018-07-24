import { Component, OnInit } from '@angular/core';
import { IKitap } from './kitap';
import { KitapService } from './kitap.service';

@Component({
  selector: 'ky-kitaplar',
  templateUrl: './kitap-listesi.component.html',
  styleUrls: ['./kitap-listesi.component.css']
})
export class KitapListesiComponent implements OnInit {
  sayfaBasligi: string = 'Kitap Listesi';
  resimWidth: number = 50;
  resimMargin: number = 2;
  resimGoster: boolean = false;

  _listeFiltrele: string;

  get listeFiltrele(): string {
    return this._listeFiltrele;
  }
  set listeFiltrele(value: string) {
    this._listeFiltrele = value;
    this.kitaplariFiltreleSonuc = this.listeFiltrele
      ? this.performFiltrele(this.listeFiltrele)
      : this.kitaplar;
  }

  kitaplariFiltreleSonuc: IKitap[];

  kitaplar: IKitap[] = [];

  toggleImage(): void {
    this.resimGoster = !this.resimGoster;
  }

  constructor(private kitapService: KitapService) {}

  onRaitingClicked(message: string): void {
    this.sayfaBasligi = 'Kitap Listesi :  ' + message;
  }

  performFiltrele(filtre: string): IKitap[] {
    filtre = filtre.toLocaleLowerCase();

    return this.kitaplar.filter(
      (kitap: IKitap) =>
        kitap.kitapAdi.toLocaleLowerCase().indexOf(filtre) !== -1
    );
  }

  ngOnInit(): void {
    this.kitaplar = this.kitapService.getKitaplar();
    this.kitaplariFiltreleSonuc = this.kitaplar;
  }
}

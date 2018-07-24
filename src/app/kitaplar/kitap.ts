export interface IKitap {
    kitapId: Number;
    kitapAdi: string;
    kitapKodu: string;
    yayinTarihi: string;
    aciklama: string;
    fiyati: number;
    puani: number;
    resimUrl: string;
}

export class Kitap implements IKitap {

    constructor(public kitapId: number,
      public  kitapAdi: string,
      public  kitapKodu: string,
      public  yayinTarihi: string,
      public  aciklama: string,
      public  fiyati: number,
      public  puani: number,
      public  resimUrl: string){}

      indirimHesapla(yuzde:number) {
          return this.fiyati- (this.fiyati *yuzde /100);
      }
}
import { Component, OnInit } from "@angular/core";
import { IKitap } from "./kitap";

@Component({
    selector: "ky-kitaplar",
    templateUrl: "./kitap-listesi.component.html",
    styleUrls: ["./kitap-listesi.component.css"]
})
export class KitapListesiComponent implements OnInit {
    ngOnInit(): void {
        console.log("on init");
    }
    sayfaBasligi: string = "Kitap Listesi";
    resimWidth: number = 50;
    resimMargin: number = 2;
    resimGoster: boolean = false;

    _listeFiltrele: string;

    get listeFiltrele(): string {
        return this._listeFiltrele;
    }
    set listeFiltrele(value: string) {
        this._listeFiltrele = value;
        this.kitaplariFiltreleSonuc = this.listeFiltrele ? this.performFiltrele(this.listeFiltrele) : this.kitaplar;
    }


    kitaplariFiltreleSonuc: IKitap[];

    kitaplar: IKitap[] = [
        {
            "kitapId": 2,
            "kitapAdi": "Dijital Kale",
            "kitapKodu": "ADC-2112438",
            "yayinTarihi": "Mayıs 18, 2015",
            "aciklama": "Ulusal Güvenlik Teşkilatı dünyanın kaderini değiştirecek ve dijital ortamdaki tüm şifreli metinleri bilecek özel bir bilgisayar üretir. Ne var ki, günün birinde bu özel bilgisayar karşılaştığı esrarengiz bir şifreyi çözemez",
            "fiyati": 20.80,
            "puani": 4.2,
            "resimUrl": "https://imageserver.kitapyurdu.com/select.php?imageid=42727"
        },
        {
            "kitapId": 2,
            "kitapAdi": "Da Vinci Şifresi",
            "kitapKodu": "KLS-2104037",
            "yayinTarihi": "Aralık 18, 2017",
            "aciklama": "Dan Brown, ülkedeki birkaç usta yazardan biri. Da Vinci Şifresi üstün bir zeka tarafından kurgulanmış harika bir gerilim romanı.",
            "fiyati": 23.40,
            "puani": 3.2,
            "resimUrl": "https://imageserver.kitapyurdu.com/select.php?imageid=5568091"
        }
    ];

    toggleImage(): void {
        this.resimGoster = !this.resimGoster;
    }

    constructor() {
        this.kitaplariFiltreleSonuc = this.kitaplar;
        this.listeFiltrele = "Da vinci";
    }

    performFiltrele(filtre: string): IKitap[] {
        filtre = filtre.toLocaleLowerCase();

        return this.kitaplar.filter((kitap: IKitap) =>
            kitap.kitapAdi.toLocaleLowerCase().indexOf(filtre) !== -1);
    }
}

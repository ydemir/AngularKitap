import { Injectable } from '@angular/core';
import { IKitap } from './kitap';

@Injectable({
    providedIn:'root'
})
export class KitapService {
  getKitaplar(): IKitap[] {
    return [
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
  }
}

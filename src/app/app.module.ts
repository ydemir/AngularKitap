import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { KitapListesiComponent } from './Kitaplar/kitap-listesi.component';
import { BoslukKaldirPipe } from './shared/bosluk-kaldir.pipe';
import { PuanComponent } from './shared/puan.component';

@NgModule({
  declarations: [
    AppComponent,
    KitapListesiComponent,
    BoslukKaldirPipe,
    PuanComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

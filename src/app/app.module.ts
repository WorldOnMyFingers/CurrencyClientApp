import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCurrencyBoxComponent } from './single-currency-box/single-currency-box.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { CurrencyService } from './Client/api/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { APP_LOCALE_ID } from './app-locale';
import { LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    SingleCurrencyBoxComponent,
    CurrencyTableComponent,
    MenuToolbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    CurrencyService,
    {
      provide: TRANSLATIONS_FORMAT,
      useValue: "xlf"
    }, { 
      provide: TRANSLATIONS, 
      useFactory: (locale) => {
        locale = locale || 'en-US'; 
        return require(`raw-loader!src/app/locale/messages.${locale}.xlf`);
      },
      deps: [LOCALE_ID] 
    }, {
      provide: LOCALE_ID,
      useValue: APP_LOCALE_ID
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

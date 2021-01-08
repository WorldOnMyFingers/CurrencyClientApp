import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Gold and Currency Rates in Pakistan - GoldAndCurrencyRates.Com';
  direction:string = "ltr";

  constructor(@Inject(LOCALE_ID) public locale: string) {
          if(locale == 'ar')
          {
            this.direction = 'rtl';
          } 
          else
          {
            this.direction = 'ltr';
          }

      }
}

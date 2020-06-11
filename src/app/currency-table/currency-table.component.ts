import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyService } from '../Client/api/currency.service';
import { CurrencyPairNameValue } from '../Client/model/currencyPairNameValue';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  // ...
} from '@angular/animations';
import { interval } from 'rxjs';
import { CurrencyValue } from '../Client';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.less'],
  animations: [
    trigger('realTimeChange', [
      state('red', style({ transform: 'translateX(0)' })),
      state('green', style({ transform: 'translateX(0)' })),
      state('normal', style({})),
      transition('void => green', [
        animate(500, keyframes([
          style({ opacity: 0 }),
          style({ backgroundColor: '#00FF7F', opacity: 1 }),
          style({ opacity: 1 })
        ]))
      ]),
      transition('void => red', [
        animate(500, keyframes([
          style({ backgroundColor: '#ce290b', opacity: 1 }),
          style({ opacity: 0.5 })
        ]))
      ])
    ])
  ]
})
export class CurrencyTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value', 'changeRate'];
  feedColumns: string[] = ['name', 'feed'];
  dataSource: MatTableDataSource<CurrencyPairNameValue>;
  currencies: CurrencyPairNameValue[] = [];
  localCurrencyCode: string = 'pkr';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.GetData();
    interval(7000)
      .subscribe(x => {
        this.GetData();
      });
  }
  private GetData(){
    this.currencyService.currencyGet(this.localCurrencyCode).toPromise().then(x => {
      this.currencies = x;
      this.dataSource = new MatTableDataSource<CurrencyPairNameValue>(this.currencies);
    });
  }

  FindCurrencyObject(data: MatTableDataSource<CurrencyPairNameValue>, currencyCode): CurrencyPairNameValue{
    debugger;
    var found = data.data.find(element => element.code === currencyCode);
    console.log(found);
    return found;
  }

  GetChangeColor(last: CurrencyValue, previousOrFirst: CurrencyValue) {
    if (!previousOrFirst) return 'normal';
    var change = (last.value - previousOrFirst.value) / last.value;
    var roundedChange = Math.round(change * 100000) / 100;
    if (roundedChange > 0) {
      return "green";
    }
    else if (roundedChange < 0) {
      return "red";
    }
    else {
      return "normal";
    }
  }

  GetChangeRate(last: number, first: number) {
    var change = (last - first) / last;
    return Math.round(change * 10000) / 100;
  }


}


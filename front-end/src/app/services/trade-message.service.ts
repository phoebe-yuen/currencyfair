import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeMessage } from '../entity/tradeMessage';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradeMessageService {

  constructor(
    public http: HttpClient,
    
  ) { }

  getTradeMessageList():Observable<TradeMessage[]>{
    const url='/tradeMessageService/getTradeMessageList';
    return this.http.get<TradeMessage[]>(url).pipe(
      tap(tradeMessageList => {
        return tradeMessageList;
      })
    )
  }



}

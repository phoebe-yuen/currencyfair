import { Component } from '@angular/core';
import { TradeMessage } from './entity/tradeMessage';
import { TradeMessageService } from './services/trade-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trade-message-app';
  tradeMessageList: TradeMessage[]=[];
  constructor(public tradeMessageService: TradeMessageService){

  }

  ngOnInit(): void{
    this.tradeMessageService.getTradeMessageList().subscribe( tradeMessageList =>{
        this.tradeMessageList = tradeMessageList;

      }
    )
  }

}

package com.currencyfair.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TradeMessageController {

    ArrayList<TradeMessage> tradeMessageList = new ArrayList<TradeMessage>();
    @PostMapping("/tradeMessageService/submitTradeMessage")
    public @ResponseBody ArrayList<TradeMessage> submitTradeMessage(
            @RequestBody TradeMessage tradeMessage){
        tradeMessageList.add(tradeMessage);
        return tradeMessageList;
    }

    @GetMapping("/tradeMessageService/getTradeMessageList")
    public @ResponseBody ArrayList<TradeMessage> getTradeMessageList(){
        return tradeMessageList;
    }

}

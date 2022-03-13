

class Simulation{

    constructor(stock, priceSet, timePeriod, interval, ruleSet, risk){
        this.stock = stock;
        this.priceSet = priceSet;
        this.timePeriod = timePeriod;
        this.interval = interval;
        this.ruleSet = ruleSet;
        this.risk = risk;
        // this.ruleSet = ruleSet.from({length:length(ruleSet)}, (rule)=>Rule(rule));
        this.holding = false;
        this.positionPrice = 0;
    }


    run(){

        

        for (let i = 0; i < priceSet.length; i++) {
            onIntervalUpdate(priceSet[i], i);{

            }
            
        }

    }

    onIntervalUpdate(candle, index){
        ruleSet.forEach(Rule => {
            if(Rule.evaluate(candle, index) == "BUY"){
                return 
            }
        });
    }


    checkRisk(index){
        percentChange = (this.priceSet[index] - this.positionPrice) / this.positionPrice
        
        if(percentChange <= this.risk){
            return "SELL"
        }
    }

}
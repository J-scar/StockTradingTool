

export class SMA{
    constructor(timePeriod, seriesType){
        this.timePeriod = timePeriod;
        this.seriesType = seriesType;
        this.stockPrice = [] //stock price list
        this.indicator = [] //indicator list[]
    }

    evaluate(){
        for (let i = 0; i < this.stockPrice.length; i++) {
            if(this.indicator[i] > stockPrice[i]){
                if(this.indicator[i-1] > this.indicator[i]){
                    return "BUY"
                }
            }
            
        }
    }

    getRuleData(){
        data = [0,2,3,4,5,6,7,8];

        return data;
    }

}

// export default SMA;
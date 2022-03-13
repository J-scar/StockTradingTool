


class Rule{

    constructor(indicator, range, seriesType){
        this.indicator = indicator;
        this.rule;
        // this.ruleDir = "undefined";
        this.range = range;
        this.seriesType = seriesType;
    }


    async getRule(){
        let Trule;
        try { 
            Trule = await import(`./Rules/${this.indicator}.js`);
        } catch (error) {
            console.log(error);
        }
        this.rule = new Trule(this.indicator, this.range, this.seriesType);
        console.log(this.rule.getRuleData);
        console.log("finished")
    }


    evaluate(){
        return this.rule.evaluate;
    }

}

console.log("here")
var test = new Rule("SMA", "1D", 'c');
try {
    test.getRule();
} catch (error) {
    console.log(error);
}

function telephone(name, imei, camera, processor, balance, chargeBalanca) {
    this.Firstname = name;
    this.imeiCode = imei;
    this.camera = camera;
    this.processor = processor;
    this.balance = balance;
    this.chargeb = chargeBalanca;

    }

var telephone1 = new telephone("samsung", "124545", "504", "302", "5azn", "70%");
// console.log(telephone1);
var telephone2 = new telephone("nokia", "142424414", "100*200", "500", "3azn", "100%");
 //console.log(telephone2);
telephone1.getInfo = function () {
    return this.Firstname + " " + this.imeiCode + " " + this.camera + " "+this.processor
}
console.log(telephone1.getInfo())


telephone2.getInfo=function(){
    return this.Firstname + " " + this.imeiCode + " " + this.camera + " "+this.processor
}
console.log(telephone2.getInfo())

telephone1.getBalance = function () {
    return this.balance
}
console.log(telephone1.getBalance())


 telephone1.getchargeBalance = function () {
     return this.chargeb
 }
 console.log(telephone1.getchargeBalance())



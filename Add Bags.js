function addBags (input){
let bagPrice = Number (input [0]);
let bagWeight = Number (input[1]);
let daysToStart = Number (input[2]);
let bagNum = Number (input[3]);

    if (bagWeight<10){
        bagPrice = bagPrice * 0.2 
    }else if (bagWeight>=10 && bagWeight<=20){
        bagPrice = bagPrice *0.5
    }

    if (daysToStart >30){
        bagPrice *=1.1
    }else if (daysToStart >=7 && daysToStart<=30){
        bagPrice *=1.15
    }else if (daysToStart >0 && daysToStart <7){
        bagPrice *=1.4
    }
let totalPrice = bagNum*bagPrice
    console.log (`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
addBags (["30","18","15","2"])
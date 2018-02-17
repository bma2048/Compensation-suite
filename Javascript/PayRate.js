const HOURLY = "Hourly";
const DAILY = "Daily";
const WEEKLY = "Weekly";
const MONTHLY = "Monthly";
const ANNUAL = "Annual";

$(document).ready(function(){
    $("#overtime").hide();
    $("#convert").click(function (){
        convertAction();
    });

    $("#amount").click(function(){
        $(this).select();
    });

    $("#amount").keypress(function (e) {
        var key = e.which;
        if(key == 13){
           $("#convert").click();
        }
    });
    
    $("#frequencyList").change(function(){
        $("#convert").click();
    });

    $("#exemptYes").click(function(){
        $("#overtime").hide();
    });

    $("#exemptNo").click(function(){
        $("#overtime").show();
    });

    $("#clearButton").click(function(){
        clearAll();
        formatNums();
    });
});

function convertAction(){
    var amount = document.getElementById("amount").value;
    var frequency = document.getElementById("frequencyList").value;

    if(frequency == HOURLY){
        hourlyPay(amount);
    } 
    if(frequency == DAILY){
        dailyPay(amount);
    }
    if(frequency == WEEKLY){
        weeklyPay(amount);
    }
    if(frequency == MONTHLY){
        monthlyPay(amount);
    }
    if(frequency == ANNUAL){
        annualPay(amount);
    }
    
    formatNums();
}

function hourlyPay(amount){
    document.getElementById("HR").value = amount;
    document.getElementById("DR").value = amount * 8;
    document.getElementById("WR").value = amount * 40;
    document.getElementById("MR").value = amount * 173.35;
    document.getElementById("AR").value = amount * 2080.1;
    document.getElementById("OR").value = amount * 1.5;
}

function dailyPay(amount){
    document.getElementById("HR").value = amount/8;
    document.getElementById("DR").value = amount;
    document.getElementById("WR").value = amount * 5;
    document.getElementById("MR").value = (amount/8) * 173.34;
    document.getElementById("AR").value = ((amount/8)*173.34)*12;
    document.getElementById("OR").value = (amount/8) * 1.5;
}

function weeklyPay(amount){
    document.getElementById("HR").value = (amount/5)/8;
    document.getElementById("DR").value = amount / 5;
    document.getElementById("WR").value = amount;
    document.getElementById("MR").value = amount * 4.33;
    document.getElementById("AR").value = (amount * 4.33) * 12;
    document.getElementById("OR").value = (amount/5)/8 * 1.5;
}

function monthlyPay(amount){
    document.getElementById("HR").value = ((amount/4)/5)/8;
    document.getElementById("DR").value = (amount/4)/5;
    document.getElementById("WR").value = amount / 4;
    document.getElementById("MR").value = amount;
    document.getElementById("AR").value = amount * 12;
    document.getElementById("OR").value = ((amount/4)/5)/8 * 1.5;
}

function annualPay(amount){
    document.getElementById("HR").value = (((amount/12)/4)/5)/8;
    document.getElementById("DR").value = ((amount/12)/4)/5;
    document.getElementById("WR").value = ((amount/12)/4);
    document.getElementById("MR").value = amount / 12;
    document.getElementById("AR").value = amount;
    document.getElementById("OR").value = (((amount/12)/4)/5)/8 * 1.5;
}

function formatNums(){
    document.getElementById("amount").value = (Math.round(document.getElementById("amount").value * 100)/100).toFixed(2);
    document.getElementById("HR").value = (Math.round(document.getElementById("HR").value * 100)/100).toFixed(2);
    document.getElementById("DR").value = (Math.round(document.getElementById("DR").value * 100)/100).toFixed(2);
    document.getElementById("WR").value = (Math.round(document.getElementById("WR").value * 100)/100).toFixed(2);
    document.getElementById("MR").value = (Math.round(document.getElementById("MR").value * 100)/100).toFixed(2);
    document.getElementById("AR").value = (Math.round(document.getElementById("AR").value * 100)/100).toFixed(2);
    document.getElementById("OR").value = (Math.round(document.getElementById("OR").value * 100)/100).toFixed(2);
}

function clearAll(){
    document.getElementById("amount").value = 0;
    document.getElementById("HR").value = 0;
    document.getElementById("DR").value = 0;
    document.getElementById("WR").value = 0;
    document.getElementById("MR").value = 0;
    document.getElementById("AR").value = 0;
    document.getElementById("OR").value = 0;
    document.getElementById("amount").select();
}
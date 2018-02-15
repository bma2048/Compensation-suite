const HOURLY = "Hourly";
const DAILY = "Daily";
const WEEKLY = "Weekly";
const MONTHLY = "Monthly";
const ANNUAL = "Annual";

$(document).ready(function(){
    $("#overtime").hide();
    $("#convert").click(function (){
        var amount = document.getElementById("amount").value;

        if($("#frequencyList").val() == HOURLY){
            hourlyPay(amount);
        } 
        if($("#frequencyList").val() == DAILY){
            dailyPay(amount);
        }
        if($("#frequencyList").val() == WEEKLY){
            weeklyPay(amount);
        }
        if($("#frequencyList").val() == MONTHLY){
            monthlyPay(amount);
        }
        if($("#frequencyList").val() == ANNUAL){
            annualPay(amount);
        }

        if($("#exemptYes").is(":checked")){
            $("#overtime").hide();
        }

        if($("#exemptNo").is(":checked")){
            $("#overtime").show();
        }
        
        formatNums();

    });

    $("#clearButton").click(function(){
        $("#HR").val("");
        $("#DR").val("");
        $("#WR").val("");
        $("#MR").val("");
        $("#AR").val("");
    });
});

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
    document.getElementById("HR").value = (Math.round(document.getElementById("HR").value * 100)/100).toFixed(2);
    document.getElementById("DR").value = (Math.round(document.getElementById("DR").value * 100)/100).toFixed(2);
    document.getElementById("WR").value = (Math.round(document.getElementById("WR").value * 100)/100).toFixed(2);
    document.getElementById("MR").value = (Math.round(document.getElementById("MR").value * 100)/100).toFixed(2);
    document.getElementById("AR").value = (Math.round(document.getElementById("AR").value * 100)/100).toFixed(2);
    document.getElementById("OR").value = (Math.round(document.getElementById("OR").value * 100)/100).toFixed(2);
}
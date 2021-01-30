
function increaseDecrease(ticket,isIncrease) {
    const ticketInput = document.getElementById(ticket +'-quantity');
    const ticketCount = parseInt(ticketInput.value);
    let newCount = ticketCount;
    if(isIncrease ==true){
        newCount=ticketCount+1;
    }
    if(isIncrease == false && ticketCount > 0){ 
        newCount=ticketCount-1;
    }
     ticketInput.value = newCount;
    totallCalculation();
   
} 
 
function totallCalculation(){
    const priceInput= document.getElementById("increase-quantity");
    const priceOutput= parseInt(priceInput.value);

    const secpriceInput= document.getElementById("second-increase-quantity");
    const secpriceOutput= parseInt(secpriceInput.value);

    totallPrice= priceOutput*150 + secpriceOutput *100;
    document.getElementById('subTotal').innerText='$' + totallPrice;

    const Charge=totallPrice *.1;
    document.getElementById('charge').innerText='$' + Charge;
    
    totallAmmount=totallPrice+Charge;
    document.getElementById('amount').innerText='$' + totallAmmount;
 
}

function booking(){
    alert("Booking Successfully & have a safe journey");
}


 
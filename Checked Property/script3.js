const SubscibeButton = document.getElementById("subscribe");
const Paytm = document.getElementById("Paytm");
const Paypal = document.getElementById("PayPal");
const Mastercard = document.getElementById("Mastercard");
const SubmitButton = document.getElementById("submit");

SubmitButton.onclick = function(){
    if(SubscibeButton.checked){
        document.getElementById("subs").textContent = `You are Subscribed`;
    }
    else{
        document.getElementById("subs").textContent = `You are not Subscribed`;
    }


    if(Paytm.checked){
        document.getElementById("pay").textContent = `You chose Paytm for Payment.`;
    }
    else if(Paypal.checked){
        document.getElementById("pay").textContent = `You chose PayPal for Payment.`;
    }
    else if(Mastercard.checked){
        document.getElementById("pay").textContent = `You chose MasterCard for Payment.`;
    }
    else{
        document.getElementById("pay").textContent = `You have not chosen any Payment Option`;
    }
}
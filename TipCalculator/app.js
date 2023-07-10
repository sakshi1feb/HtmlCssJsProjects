let people =1;// to store the number of people
let total=document.querySelector('.total');// to get the total element from html to display output
let billAmount;// to store the bill amount
let tipAmount=0;// to store the tip amount
let amount;// to calculate the amount to be paid by each person.

// the billTotal() it takes the bill amount and the tip amount and calculates the amount to be
// paid and display the output to nearest two digits
 function billTotal(){
    billAmount = Number(document.querySelector('#bill-amount').value);
    total.innerHTML=billAmount;
    tipAmount=Number(document.querySelector("#tip").value)/100;
    amount=(billAmount+(tipAmount*billAmount))/Number(people);
    amount=amount.toFixed(2)
    total.innerHTML=amount;

 }

 // this function is called when the user clicks on the add people button it increases the number
 // of people by 1 and display's the output
function increasePeople(){
    people=people+1;
    document.getElementById('people').innerHTML = people
    billTotal()
}

// this function is called when the user clicks on the decrease people button it increases the number
// of people by 1 and display's the output
function decreasePeople(){
    if(people>=2){
        people=people-1;
        document.getElementById('people').innerHTML = people;
        billTotal();
    }
}

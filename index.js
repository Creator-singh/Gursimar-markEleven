const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkLucky = document.querySelector("#check");
const message = document.querySelector("#message");

function calculateDobSum(dob){
    let sum = 0;
    for(var i=0; i<dob.length; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkLucky.addEventListener("click", function isBirthDayLucky(){
    var dob = dateOfBirth.value;
    dob = dob.replaceAll("-", "");
    const sum = calculateDobSum(dob);
    if(Number(luckyNumber.value) && dob)
    {
        if(sum % Number(luckyNumber.value) === 0)
        {
            message.innerText = "Your Birthday is Lucky 🎉🥳";
        }
        else
        {
            message.innerText = "Your Birthday is not Lucky 😥";
        }
    }
    else 
    {
        message.innerText = "Enter the required fields 🥺";
    }
});
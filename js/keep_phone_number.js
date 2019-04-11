let inputs = document.getElementsByClassName("ticketField");


for (let i = 0; i<inputs.length; i++){
    inputs[i].onkeypress = "return myCheckKey()";
}

function myCheckKey(e)
{
    let andor = document.getElementsByName("ANDOR");
    if (andor[1] != null)
        andor[1].checked = true;
    checkKey(e);
}

/**
let andor = document.getElementsByName("ANDOR");
if (andor[1] != null)
    andor[1].checked = true;
**/

// This code will allow the user to keep the phone number that copies over from interaction desktop
// Before the user had to cut the phone number out, enter the NetID, and paste the phone number back into contacts
// Now the User just needs to put in the NetID. Yay!


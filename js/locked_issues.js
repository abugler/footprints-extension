//get elements we need to scrape
const links = document.getElementsByTagName("a");
tickets = Array();
let editLinks = Array();

//pull the correct js functions out
for (let i = 0; tickets.length < 10 && i < links.length; i++){
    if (links[i].href.startsWith("javascript: goToEdit"))//href format is "javascript: goToEdit(ticketNum)"
    {
        tickets.push(links[i].href);
        editLinks.push(links[i]);
    }
}

let editBaseUrl = '/MRcgi/MRTicketPage.pl?';


for (let i = 0; i < tickets.length; i++) {
    //this recreates the url that one would get if the person links on the link
    //THIS ONLY WORKS WITH 6 DIGIT TICKET NUMBERS.  When we get to 7 digit ticket numbers, please change second param
    //in the substring function to 29.
    let url = editBaseUrl+ "&MR=" + tickets.substring(22, 28) + "&PROJECTID=" + 1;


}





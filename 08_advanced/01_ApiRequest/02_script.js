const requestUrl = 'https://api.github.com/users/habibtariq513'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText)        
        console.log("Followers: ",data.followers);
    }    
}
xhr.send()

// Assignment:
// Your specific requirements for this task are:

// Extract data: Use the information fetched from the API (which I helped demonstrate how to parse into an object).
// Display information: Specifically, include the user's profile photo URL and their follower count within the card.
// Build the component: Create the card dynamically using JavaScript rather than pre-writing it in HTML.
// Interactivity: Add a button that, when clicked, generates or displays this card with the user's data.
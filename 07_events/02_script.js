// We dont use the following way as it does not provide anyextra features like Event Propagation.

// document.getElementById('owl').onclick = () => {
//     alert('owl clicked!')
// }

// 2nd and recommended approach
document.getElementById('owl').addEventListener('click', ()=> {
    // console.log('OWL Clicked!');        
}, false) // false is a default parameter

// ----------------- Event Propagation types -----------------
//  1) Bubble Propagation
//  2) Capturing Propagation

//  1) Bubble Propagation (Bottom to top):
// When an event occurs on an element, it first runs the handlers on that element, then on its parent, then on the parent's parent, and so on up to the document root. This allows outer containers to respond to events that originated from their inner elements.

// bubble propagation ma sab se pehlay ander wala element or phir bahir waley element 
document.getElementById('images').addEventListener('click', () =>{
    // console.log('Clicked inside ul');        
}, false) 

document.getElementById('owl').addEventListener('click', () =>{
    // console.log('OWL Clicked!');     
    e.stopPropagation() // is se event bubble ho kr uper waley elements pr nahi jaye ga   
}, false) 


//  2) Capturing Propagation (Top to Bottom):
// When capturing is used, the event is handled first by ancestor elements
// on the way down from the document root to the target element, before
// the target's own handlers run. Passing `true` as the third argument to
// addEventListener enables capturing for that handler.
document.getElementById('images').addEventListener('click',() => {
    // console.log('Clicked inside ul');        
}, true) 

document.getElementById('owl').addEventListener('click', (e) => {
    // console.log('OWL Clicked!');         
}, true) 

// ------------ PreventDefault() method ------------
// The preventDefault() method of the Event interface tells the user agent that the event is being explicitly handled, so its default action, such as page scrolling, link navigation, or pasting text, should not be taken.
document.getElementById('google').addEventListener('click', (e) => {
    // console.log('Google Clickeeeed!');
    e.preventDefault()
    e.stopPropagation()
}, false)

// ------------ Image Remover ------------



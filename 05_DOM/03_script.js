// QuerySelector: Returns the fist element 
// QuerySelectorAll: Returns the Node List

// console.log(document.querySelector("div").textContent); // Returns texual Content even for hidden elements
// console.log(document.querySelector("div").innerHTML); // Returns text along with tags enclosed
// console.log(document.querySelector("div").innerText); // returns the text written in tags only

// let h3 = document.querySelector("h3")
// h3.innerText = h3.innerText + " Vegetables"
// console.log(h3.innerText)


// let boxes = document.querySelectorAll(".box")[0]
// boxes.innerText = boxes.innerText + " Bhai"
// console.log(boxes.innerText);

// let boxes_2 = document.querySelectorAll(".box")[1]
// boxes_2.innerText = boxes_2.innerText + " Yousafi"
// console.log(boxes_2.innerText);

// let boxes_3 = document.querySelectorAll(".box")[2]
// boxes_3.innerText = boxes_3.innerText + " Yousafi"
// console.log(boxes_3.innerText);

// -------- getAttrubute() --------
// Used to get 
console.log(document.querySelector("div").getAttribute("id"))

// -------- setAttrubute() --------
// console.log(document.querySelectorAll("div")[1].setAttribute("id", "newBox"))

// -------- node.style --------
console.log(document.querySelectorAll("div")[0].style.backgroundColor = "brown")

// -------- node.append --------
// Step - 1: Element Creation
let myBtn = document.createElement("button");
myBtn.innerText="Click ME!";

// Step - 2: Selection + Appendation
console.log(document.querySelector("div").append(myBtn));



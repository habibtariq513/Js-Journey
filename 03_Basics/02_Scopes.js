function one() {
    const username = "Habib"
    function two() {
        const website = "Youtube"
        console.log(username);        
    }
    // console.log(website);
    two()    
}

one()

// ---- Different Waya of Function Declaration ---- 
function addOne(num) {
    return num + 1
}

addOne(4)

const addTwo = function(num) {
    return num + 2
}

addTwo(5)

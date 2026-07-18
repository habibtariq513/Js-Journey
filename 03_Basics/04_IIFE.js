// IIFE --> Immediately Invoked Function Expressions
// We use it when we don't want our specific function to be polluted due to Global Scope

// Common Way
function chai() {
    console.log(`Common Way: DB CONNECTED.`);    
}
chai();

// Withh IIFE Technique
(function iifeTech() {
    console.log(`IIFE Tchnique: DB CONNECTED.`);
})()

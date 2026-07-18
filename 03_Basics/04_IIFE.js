// IIFE --> Immediately Invoked Function Expressions
// We use it when we don't want our specific function to be polluted due to Global Scope declarations.

// Common Way
function chai() {
    console.log(`Common Way: DB CONNECTED.`);    
}
chai();

// Withh IIFE Technique
// SYNTAX: (Function Definition Paranthesis)(Execution Paranthesis)
(function iifeTech() {
    // Named IIFE:
    console.log(`IIFE Tchnique: DB CONNECTED.`);
})();

// Using Arrow
(() => {
    // Unamed IIFE:
    console.log(`Arrow Tchnique: DB CONNECTED.`);
})();

// Parameters passing in Unamed IIFE
((name) => {
    console.log(`Arrow Tchnique: DB CONNECTED to ${name}.csv.`);
})('Habib');


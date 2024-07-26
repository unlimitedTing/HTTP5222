// Example of non-blocking code
console.log("Start of non-blocking code");

setTimeout(() => {
    console.log("Inside the setTimeout callback");
}, 1000);

console.log("End of non-blocking code");

// Example of blocking code
console.log("Start of blocking code");

console.log("1"); //this line blocks line 14 from running first
console.log("2");
console.log("3");

console.log("End of blocking code");


//self-executing anonymous function OR
//IIFE -- Immediately Invoked function Expression
(function(){
    let myFunctionalVariable = 0;

    function start() {
        console.log(`App Started...${myFunctionalVariable}`);
    }

    window.addEventListener("load", start);
})();
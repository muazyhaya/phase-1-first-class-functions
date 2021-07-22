function receivesAFunction(spy){
console.log(spy());
}
receivesAFunction(spy);

function returnsANamedFunction() {
     function namedFunction(){
        return "Hello"
    }
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("I'm anonymous")
    }
}



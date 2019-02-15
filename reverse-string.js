
 //for loop retrun - passed all five tests
 function reverseString(actual) {
    let expected = "";
    for (var i = actual.length - 1 ; i >= 0 ; i--) {
     expected += actual[i];
    }  
return expected;}

export{reverseString}
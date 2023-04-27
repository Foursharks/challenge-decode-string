// Write your code below this line

// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"



//Every following digit should be moved decoderKey places, and then a new string returned with the decoded word. 

    //Whatever the first digit is represents what the shift should be, so that should be isolated

    function decoder(word){
        let num = word[0]; 
        num = parseInt(num); 
        let newString = ``; 
        let newLetter = ``; 
        let ascii = 0; 
        for(let i=1; i<word.length; i++){
            ascii = word.charCodeAt(i)+ num; 
            newLetter = String.fromCharCode(ascii); 
            newString = newString + newLetter; 
        }
        return(newString); 
    }

console.log(decoder("3ce")); 
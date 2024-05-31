function calculateArea(width, height){
    console.log(width * height);
}
calculateArea(5, 4)

function convertToFehrenheit(temperature){
    console.log(temperature * (9/5) + 32);
}
convertToFehrenheit(30);

function isEven(number){
    if(number % 2 === 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
isEven(9);


function countVowels(word){
    let wordArray  = [];
    for(let j = 0; j < word.length; j++){
        wordArray.push(word.charAt(j));
    }
    let count= 0;
    const vowel= ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i < vowel.length; i++){
        for(let index = 0; index < wordArray.length; index++){
            if(vowel[i] == wordArray[index]){
                count = count + 1;
            }
        }
    }
    console.log(count);
}
countVowels('ifeanyi');

function isLeapYear(year) {
    year
    if(year % 4 == 0 || year % 400 == 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

isLeapYear(2002);
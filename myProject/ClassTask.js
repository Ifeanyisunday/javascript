const listOfNumbers1 = [2, 3, 4, 5, 1];
const user = {
    "firstName": "John",
    "lastName": "Doe",
};

let result1 = listOfNumbers1.map((detail)=>{
    return detail * 2;
});

const listOfNumbers = ["kent", "sunday", "ify"];
let result = listOfNumbers.map((detail)=>{
    return detail.length;
});

const listOfNumbers3 = [2, 3, 4, 5, 1]
const answer = listOfNumbers3.findIndex((number)=>{
    return number > 2;
})

const listOfNumbers4 = [[2, 3, 4, 5, 1], [1, 2], [2, 3, 4, 5]];
let value = listOfNumbers4[0][4]


const listOfNumbers5 = [95, 78, 85, 60, 45, 92];

/*let result3 = listOfNumbers5.map((number) =>{
    return number >= 90 && number <= 100? "A" : number >= 80 && number <= 89? "B" : 
    number >= 70 && number <= 79? "C" : number >= 60 && number <= 69? "D" : "F"
})*/
function grade(number){
    return number >= 90 && number <= 100? "A" : number >= 80 && number <= 89? "B" :
        number >= 70 && number <= 79? "C" : number >= 60 && number <= 69? "D" : "F"
}

let result3 = listOfNumbers5.map(grade) 

console.log(result3);


let numbers = [2, 3, 5, 3, 3, 2, 5]




function printObj(numbers){
    output = {}
    for(let number of numbers){
        newObject.set(output[number], number++)
    
    }
}
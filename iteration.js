//Given a sequential array of numbers write a program to stop executing the loop when the value is equal to 5.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[ i ] == 5) {
        break;
    }

    console.log( `the current number is: ${ numbers[ i ] }`);

}

console.log('----------------------')
var employees = [
    {
        name: "Favour",
        salary: 2000,
        active: false
    },
    {
        name: "Choice",
        salary: 1500,
        active: true
    },
    {
        name: "Rume",
        salary: 17000,
        active: true
    },
    {
        name: "Pascal",
        salary: 20000,
        active: true
    },
    {
        name: "Adesuwa",
        salary: 2000,
        active: false
    }
];

for(let index = 0; index < employees.length; index++){
    
    if(employees[ index][ 'active'] == true){
        console.log(`We have paid the sum of ${ employees[ index ][ 'salary']} to ${ employees[ index ][ 'name']}`)
    }
}
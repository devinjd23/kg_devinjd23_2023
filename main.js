// Stores the arguments into a variable
var args = process.argv.slice(2);

// Loop for going through each argument
for (var i = 0; i < args.length; i++) {
    // Convert to string to be able to go through each digit
    args[i].toString();

    // Loop for going through each individual digit
    for (var j = 0; j < args[i].length; j++) {
        numberToString(args[i][j]);
    }

    // Seperate arguments with a comma unless its the last argument
    if (i != args.length - 1) {
        process.stdout.write(",");
    }
}

// Function to print the spelling of the individual digit
function numberToString(num) {
    switch(num) {
        case "0":
            process.stdout.write("Zero");
            break;
        case "1":
            process.stdout.write("One");
            break;
        case "2":
            process.stdout.write("Two");
            break;
        case "3":
            process.stdout.write("Three");
            break;
        case "4":
            process.stdout.write("Four");
            break;
        case "5":
            process.stdout.write("Five");
            break;
        case "6":
            process.stdout.write("Six");
            break;
        case "7":
            process.stdout.write("Seven");
            break;
        case "8":
            process.stdout.write("Eight");
            break;
        case "9":
            process.stdout.write("Nine");
            break;
    }
}
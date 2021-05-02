// Stores the arguments into a variable
var args = process.argv.slice(2);

// Loop for going through each argument
for (var i = 0; i < args.length; i++) {
    // Convert to string to be able to go through each digit
    args[i].toString();
    process.stdout.write(args[i]);

    // Seperate arguments with a comma unless its the last argument
    if (i != args.length - 1) {
        process.stdout.write(",");
    }
}
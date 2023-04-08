//This script will take two command line arguments - a pair of strings that should be compared to see which one comes first alphabetically (letter casing is not important).

// It must take two command line arguments, which you must compare

//two command line arguments
const firstValue = process.argv[2];
const secondValue = process.argv[3];
const firstValueLower = firstValue.toLowerCase();
const secondValueLower = secondValue.toLowerCase();
//if statements here

//Your script should determine if the first string is before, after, or in the same position (equal) to the second string, alphabetically. For each case, you should print out a number with console.log as described below.
if (secondValueLower > firstValueLower){console.log(-1);}
//When the first argument is earlier in the alphabet than the second, your script should print -1.
else if (firstValueLower == secondValueLower){console.log(0);}
//When the first argument is the same as the second, your script should print 0.
else if (firstValueLower > secondValueLower){console.log(1);}
//When the first argument is later in the alphabet than the second, your function should print 1.


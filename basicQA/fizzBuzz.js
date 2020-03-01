// 3 - fizz 5 -buzz 15-fizzBuzz
fizzBuzz = (n) => {
for( let i = 1; i <= n; i++) {
    let a = i % 3;
    let b = i % 5;
if ( a === 0 && b === 0) {
    console.log("fizzBuzz");
} else if(a === 0) {
    console.log("fizz");
}  else if(b === 0) {
    console.log("buzz");
} else {
    console.log(i);
}
}
}

fizzBuzz(15);
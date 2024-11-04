///looping constructs
// myFun();

//#region 
/**
 * Function in global scope to test for loops
 * @author satishn
 */
function myFun() {
    for (let i = 0; i < 10; i++) {
        for (let j = 10; j > 0; j--) {
            console.log(j + i);
        }
    }
    for (let i = 1, j = 100; i < 101, j > 0; i++, j--) {
        console.log("Hyp(" + i + "," + j + ")=" + Math.hypot(i, j));
    }
    let i = 0;
    for (; ;) {
        if (i < 10) {
            console.log(i + 1);
            i++;
        }
        else {
            break;
        }
    }
    let j = 10;
    for (; j > 0;) {
        console.log(j);
        j--;
    }
    //Calculate the sqrts of first hundred nos
    for (let i = 1; i < 101; i++) {
        console.log("Sqrt(" + i + ")=" + Math.sqrt(i));
    }
}
//#endregion

//#region 
/**
 * Function to show the usage of while loop
 * Sentinel controlled loop
 * @author satishn
 */
function aFun() {
    let i = 0;
    while (i < 10) {
        console.log(i + 1);
        i++;
    }
    let j = 10;
    while (j > 0) {
        console.log(j);
        j--;
    }
    let k = 10;
    // while (k < 10) {
    //     console.log(k);
    //     k++;
    // }
    do {
        console.log(k);
        k++;
    } while (k < 10);
}
//#endregion



